import { dummyApi } from "@/lib/axios/dummyApi"
import { IDeleteProductResponse, IProductIdProps } from "./types"

export const deleteProduct = async ({ id }: IProductIdProps) => {
  const { data } = await dummyApi.delete<IDeleteProductResponse>(`/products/${id}`)

  return data
}
