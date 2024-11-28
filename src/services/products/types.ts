export interface IProductIdProps {
  id: number
}

export interface IProductCategoryProps {
  category?: string
}

export interface ISingleProductResponse {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: Array<string>
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Array<{
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }>
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  thumbnail: string
  images: Array<string>
}

export interface IAddProductProps extends Required<Omit<ISingleProductResponse, 'id'>> { }

export interface IDeleteProductResponse extends ISingleProductResponse {
  isDeleted: boolean,
  deletedOn: string
}

export interface IProductByCategoryResponse {
  products: Array<ISingleProductResponse>,
  total: number,
  skip: number,
  limit: number
}