import { authLogin } from "@/services/authentication/auth-login"
import { IAuthLoginProps } from "@/services/authentication/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { z } from "zod"

const LoginSchema = z.object({
  username: z
    .string()
    .refine((value) => value.trim() !== '', {
      message: 'Campo obrigatório',
    }),
  password: z
    .string({ required_error: 'Campo obrigatório' })
    .refine((value) => value.trim() !== '', {
      message: 'Campo obrigatório',
    }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const useSignInModel = () => {

  const form = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: IAuthLoginProps) =>
      await authLogin(data),
  })

  const handleSubmitLogin = async (data: IAuthLoginProps) => {
    const userResponse = await mutateAsync({
      password: data.password,
      username: data.username,
    })

    console.log(userResponse)
  }

  return {
    form,
    handleSubmitLogin
  }
}