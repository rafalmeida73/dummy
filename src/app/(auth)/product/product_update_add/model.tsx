import { addProduct } from '@/services/products/add-product';
import { ISingleProductResponse } from '@/services/products/types';
import { updateProduct } from '@/services/products/update-product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddOrUpdateProductSchema, AddOrUpdateProductSchemaType } from './types';

export const useAddOrUpdateProductModel = () => {
  const item = useLocalSearchParams<{
    product: string
  }>();
  const product = JSON.parse(item.product) as ISingleProductResponse;

  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const form = useForm<AddOrUpdateProductSchemaType>({ resolver: zodResolver(AddOrUpdateProductSchema) })

  const { mutateAsync: addProductMutation } = useMutation({
    mutationFn: async (data: AddOrUpdateProductSchemaType) =>
      await addProduct(data),
  })

  const { mutateAsync: updateProductMutation } = useMutation({
    mutationFn: async (data: ISingleProductResponse) =>
      await updateProduct(data),
  })

  const priceWithDiscount = product.price - (product.price * product?.discountPercentage || 0) / 100

  const handleGoBack = () => {
    router.back()
  }

  const handleOpenCloseModal = () => {
    setShowModal(!showModal)
  }

  const handleSubmitForm = async (data: AddOrUpdateProductSchemaType) => {
    try {
      if (product) {
        const productUpdated = await updateProductMutation({
          ...product,
          ...data,
          images: [...product.images, ...data.image],
          discountPercentage: Number(data.discountPercentage),
          price: Number(data.price)
        })

        router.push({
          pathname: `/(auth)/product/product_details`, params: {
            product: JSON.stringify(productUpdated)
          }
        })

        return
      }


      const newProduct = await addProductMutation({
        ...data
      })

      router.push({
        pathname: `/(auth)/product/product_details`, params: {
          product: JSON.stringify(newProduct)
        }
      })
    } catch {
      console.log('error')
    }
  }

  useEffect(() => {
    if (product) {
      form.setValue('title', product.title)
      form.setValue('price', product.price.toString())
      form.setValue('discountPercentage', (product.discountPercentage).toString())
      form.setValue('image', product.images[0])
    }
  }, [])

  const handleChangeText = (field: keyof AddOrUpdateProductSchemaType, value: string) => {
    form.setValue(field, value)
  }

  return {
    product,
    handleGoBack,
    priceWithDiscount,
    showModal,
    handleOpenCloseModal,
    hasProduct: !!product,
    handleSubmitForm,
    form,
    handleChangeText
  }
}
