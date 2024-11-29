import React from 'react'
import { useProductsDetailsModel } from './model'
import { ProductsDetailsView } from './view'

const ProductsDetails = () => {
  const data = useProductsDetailsModel()

  return (
    <ProductsDetailsView {...data} />
  )
}

export default ProductsDetails
