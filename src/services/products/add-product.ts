import { dummyApi } from "@/lib/axios/dummyApi"
import { ISingleProductResponse } from "./types"
import { AddOrUpdateProductSchemaType } from "@/app/(auth)/product/product_update_add/types"

export const addProduct = async (productData: AddOrUpdateProductSchemaType) => {
  const { data } = await dummyApi.post<ISingleProductResponse>(`/products/add`, {
    ...productData,
    images: [productData.image],
  })

  return data
}
