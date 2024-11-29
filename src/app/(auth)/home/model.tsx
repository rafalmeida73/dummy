import { useQuery } from '@tanstack/react-query'
import { productByCategories } from '@/services/products/product-categories'
import { useState } from 'react';
import { CategoriesTypes } from './types';

export const useProductListModel = () => {
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

  return {
    productsData,
    isLoading,
    handleChageCategory,
    selectedCategory,
    isRefetching
  }
}
