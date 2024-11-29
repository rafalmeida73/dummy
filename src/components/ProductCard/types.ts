import { ISingleProductResponse } from "@/services/products/types";

export interface IProductCategoryProps extends ISingleProductResponse{
  priceWithDiscount: number;
}