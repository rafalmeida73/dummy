import { useQuery } from '@tanstack/react-query'
import { productByCategories } from '@/services/products/product-categories'
import { useState } from 'react';
import { CategoriesTypes } from './types';

export const useHomeViewModel = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenCloseModal = () => {
    setShowModal(!showModal)
  }

  return {
    handleOpenCloseModal,
    showModal
  }
}
