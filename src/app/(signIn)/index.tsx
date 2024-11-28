import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignInModel } from './model'
import { SignInView } from './view'

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

export default function Index() {

  const { email } = useSignInModel()

  return (
    <SignInView/>
  )
}
