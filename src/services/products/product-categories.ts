import { dummyApi } from "@/lib/axios/dummyApi"
import { IProductByCategoryResponse, IProductCategoryProps, ISingleProductResponse } from "./types"

export const productByCategories = async ({categories}:IProductCategoryProps) => {
  const products = await Promise.all(categories.map(async (category) => {
    const {data} = await dummyApi.get<IProductByCategoryResponse>(`/products/category/${category}`)
    return data
  }))

  const productsData = products.reduce((acc, response) => {
    acc.products = acc.products.concat(response.products);
    acc.total += response.total;
    return acc;
  }, { products: [] as ISingleProductResponse[], total: 0 });

  return productsData
}
