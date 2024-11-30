import { useRouter } from 'expo-router';
import { useState } from 'react';

export const useHomeViewModel = () => {
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenCloseModal = () => {
    setShowModal(!showModal)
  }

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      router.push('/(signIn)')
    } catch (error) {
      console.error('error')
    } finally {
      setIsLoading(false)
      setShowModal(false)
    }
  }

  return {
    handleOpenCloseModal,
    showModal,
    handleLogout,
    isLoading
  }
}
