import { dummyApi } from "@/lib/axios/dummyApi"
import { IProductIdProps, ISingleProductResponse } from "./types"

export const singleProduct = async ({ id }: IProductIdProps) => {
  const { data } = await dummyApi.get<ISingleProductResponse>(`/products/${id}`)

  return data
}
