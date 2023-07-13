import SingleProductPage from '@/components/product/_SingleProduct'
import { getSingleProduct } from '@/queries/getSIngleProduct'
import React from 'react'

const ProductPage = async ({
  params,
}: {
  params: { id: string }
}) => {
  const product = await getSingleProduct(params.id)

  if (!product) {
    return <div>Something went wrong</div>
  }
  return (
    <SingleProductPage product={product} />
  )
}

export default ProductPage