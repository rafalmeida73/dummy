import { ISingleProductResponse } from '@/services/products/types';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

export const useAddOrUpdateProductModel = () => {
  const item = useLocalSearchParams<{
    product: string
  }>();
  const product = JSON.parse(item.product) as ISingleProductResponse;

  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  

  const priceWithDiscount = product.price - (product.price * product?.discountPercentage || 0) / 100

  const handleGoBack = () => {
    router.back()
  }

  const handleOpenCloseModal = () => {
    setShowModal(!showModal)
  }

  return {
    product,
    handleGoBack,
    priceWithDiscount,
    showModal,
    handleOpenCloseModal
  }
}
