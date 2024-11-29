import React from 'react'
import { useProductListModel } from './model'
import { ProductsListView } from './view'

const ProductsList = () => {
  const data = useProductListModel()

  return (
    <ProductsListView {...data} />
  )
}

export default ProductsList
