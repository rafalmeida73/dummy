import { dummyApi } from "@/lib/axios/dummyApi"
import { IProductByCategoryResponse, IProductCategoryProps } from "./types"

export const productByCategory = async ({category}:IProductCategoryProps) => {
  const {data} = await dummyApi.get<IProductByCategoryResponse>(`/category/${category}`)

  return data
}
