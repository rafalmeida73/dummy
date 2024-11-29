import { authLogin } from '@/services/authentication/auth-login'
import { IAuthLoginProps } from '@/services/authentication/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginSchemaType } from './types'
import { useRouter } from 'expo-router'

export const useSignInModel = () => {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [invalidUser, setInvalidUser] = useState(false)

  const form = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) })

  const { mutateAsync } = useMutation({
    mutationFn: async (data: IAuthLoginProps) =>
      await authLogin(data),
  })

  const handlePressEye = () => {
    setShowPassword(!showPassword)
  }

  const handleChangeText = (field: keyof LoginSchemaType, value: string) => {
    form.setValue(field, value)
  }

  const handleSubmitLogin = async (data: IAuthLoginProps) => {
    try {
      if (invalidUser) {
        setInvalidUser(false)
      }

      await mutateAsync({
        password: data.password,
        username: data.username,
      })

      router.push('/(auth)/product/product_list')
    } catch {
      setInvalidUser(true)
    }
  }

  return {
    form,
    handleSubmitLogin,
    showPassword,
    handlePressEye,
    handleChangeText,
    invalidUser,
  }
}
