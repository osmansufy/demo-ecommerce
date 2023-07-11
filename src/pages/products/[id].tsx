import SingleProduct from '@/components/product/_SingleProduct'
import { getProducts } from '@/queries/getProducts'
import { getSingleProduct } from '@/queries/getSIngleProduct'
import { IProduct } from '@/types/products'
import { GetStaticProps } from 'next'
import React from 'react'

const productPage = ({
    product
}: {
    product: IProduct
}) => {
    return (
        <SingleProduct product={product} />
    )
}

export default productPage


export async function getStaticPaths() {

    const products = await getProducts()

    const paths = products.map((product: IProduct) => ({
        params: { id: product.id.toString() },
    }))

    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    try {
        if (!params) return {
            props: {
                product: null

            }
        }
        const product: IProduct = await getSingleProduct(params.id as string)

        return {
            props: { product },
            revalidate: 60 * 30 // 30 minutes
        }
    } catch (error) {

        return {
            props: {
                product: null

            },
            revalidate: 60 * 30 // 30 minutes}

        }

    }

}