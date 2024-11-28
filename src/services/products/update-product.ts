import { dummyApi } from "@/lib/axios/dummyApi"
import {  ISingleProductResponse } from "./types"

export const updateProduct = async (productData: ISingleProductResponse) => {
  const { id } = productData;

  const { data } = await dummyApi.put<ISingleProductResponse>(`/products/${id}`, productData)

  return data
}
