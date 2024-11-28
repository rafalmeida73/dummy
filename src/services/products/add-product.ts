import { dummyApi } from "@/lib/axios/dummyApi"
import { IAddProductProps, ISingleProductResponse } from "./types"

export const addProduct = async (productData: IAddProductProps) => {
  const { data } = await dummyApi.post<ISingleProductResponse>(`/products/add`, productData)

  return data
}
