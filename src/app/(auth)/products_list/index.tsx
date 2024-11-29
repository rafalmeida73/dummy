import React from 'react'
import ProductsListView from './view'
import { useProductListModel } from './model'

const ProductsList = () => {
  const data = useProductListModel()

  return (
    <ProductsListView {...data} />
  )
}

export default ProductsList
