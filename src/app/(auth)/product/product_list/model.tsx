import { useQuery } from '@tanstack/react-query'
import { productByCategories } from '@/services/products/product-categories'
import { useState } from 'react';
import { CategoriesTypes } from './types';
import { useRouter } from 'expo-router';
import { ISingleProductResponse } from '@/services/products/types';

export const useProductListModel = () => {
  const router = useRouter()

  let isMenCategory = true

  const [selectedCategory, setSelectedCategory] = useState<CategoriesTypes>('men');

  const menCategories = ['mens-shirts', 'mens-shoes', 'mens-watches']
  const womanCategories = ['womens-bags', 'womens-dresses', 'womens-jewellery', "womens-shoes", "womens-watches"]

  const { data: productsData, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['productByCategories'],
    queryFn: () =>
      productByCategories({
        categories: isMenCategory ? menCategories : womanCategories,
      }),
  })

  const handleRefetch = () => {
    refetch();
  }

  const handleChageCategory = (category: CategoriesTypes) => {
    try {
      setSelectedCategory(category);
      isMenCategory = category === "men"
      handleRefetch();
    } catch (error) {
      console.error(error)
    }
  }

  const handleRedirectToProduct = (product: ISingleProductResponse) => {
    router.push({
      pathname: `/(auth)/product/product_details`, params: {
        product: JSON.stringify(product)
      }
    })
  }

  return {
    productsData,
    isLoading,
    handleChageCategory,
    selectedCategory,
    isRefetching,
    handleRedirectToProduct
  }
}
