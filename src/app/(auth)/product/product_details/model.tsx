import { deleteProduct } from '@/services/products/delete-product';
import { IProductIdProps, ISingleProductResponse } from '@/services/products/types';
import { useMutation } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

export const useProductsDetailsModel = () => {
  const item = useLocalSearchParams<{
    product: string
  }>();
  const product = JSON.parse(item.product) as ISingleProductResponse;

  const { mutateAsync, isPending: deleteProductLoading } = useMutation({
    mutationFn: async (data: IProductIdProps) =>
      await deleteProduct(data),
  })

  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const priceWithDiscount = product.price - (product.price * product?.discountPercentage || 0) / 100

  const handleGoBack = () => {
    router.back()
  }

  const handleOpenCloseModal = () => {
    setShowModal(!showModal)
  }

  const handleRedirectToEditProduct = () => {
    router.push({ pathname: "/(auth)/product/product_update_add", params: { product: JSON.stringify(product) } })
  }

  const handleDeleteProduct = async () => {
    try {
      await mutateAsync({
        id: product.id
      })
      setShowModal(false)

      router.push('/(auth)/product/product_list')
    } catch {
      console.error('error')
    }
  }

  return {
    product,
    handleGoBack,
    priceWithDiscount,
    showModal,
    handleOpenCloseModal,
    handleRedirectToEditProduct,
    handleDeleteProduct,
    deleteProductLoading
  }
}
