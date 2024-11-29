import { messages } from '@/utils/zod/messages'
import { z } from 'zod'

export const LoginSchema = z.object({
  username: z
    .string({ required_error: messages.required })
    .refine((value) => value.trim() !== '', {
      message: messages.required,
    }),
  password: z
    .string({ required_error: messages.required })
    .refine((value) => value.trim() !== '', {
      message: messages.required,
    }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
