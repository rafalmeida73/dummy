import { messages } from '@/utils/zod/messages'
import { z } from 'zod'

export const AddOrUpdateProductSchema = z.object({
  title: z
    .string({ required_error: messages.required })
    .refine((value) => value.trim() !== '', {
      message: messages.required,
    }),
    description: z
    .string({ required_error: messages.required })
    .refine((value) => value.trim() !== '', {
      message: messages.required,
    }),
    price: z
    .string({ required_error: messages.required })
    .refine((value) => value.trim() !== '', {
      message: messages.required,
    }),
    discountPercentage: z
    .string({ required_error: messages.required })
    .refine((value) => value.trim() !== '', {
      message: messages.required,
    }).refine((value) => !(Number(value) > 100) , {
      message: "O desconto não pode ser maior que 100%",
    }),
    image: z
    .string({ required_error: messages.required })
    .refine((value) => value.trim() !== '', {
      message: messages.required,
    }),
})

export type AddOrUpdateProductSchemaType = z.infer<typeof AddOrUpdateProductSchema>
