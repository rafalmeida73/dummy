import React from 'react'
import { useAddOrUpdateProductModel } from './model'
import { AddOrUpdateProductView } from './view'

const AddOrUpdateProduct = () => {
  const data = useAddOrUpdateProductModel()

  return (
    <AddOrUpdateProductView {...data} />
  )
}

export default AddOrUpdateProduct
