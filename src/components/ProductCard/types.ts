import { ISingleProductResponse } from "@/services/products/types";

export interface IProductCategoryProps extends ISingleProductResponse{
  priceWithDiscount: number;
  handleRedirectToProduct: (product: ISingleProductResponse) => void
}