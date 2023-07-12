import SingleProduct from '@/components/product/_SingleProduct'
import { getProducts } from '@/queries/getProducts'
import { getSingleProduct } from '@/queries/getSIngleProduct'
import { IProduct } from '@/types/products'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const productPage = ({
    product
}: {
    product: IProduct
}) => {

    const router = useRouter()

    if (!product) return (
        <div className="container">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <button className="mt-5 bg-gray-800 text-white px-3 py-2 rounded-md"
                    onClick={() => router.push('/shop')}
                >Go back to shop</button>

            </div>
        </div>
    )


    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <SingleProduct product={product} />
    )
}

export default productPage


export async function getStaticPaths() {

    const products = await getProducts()

    if (!products) {
        return {
            paths: [],
            fallback: true
        }
    }

    const paths = products.map((product: IProduct) => ({
        params: { id: product.id.toString() },
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    try {
        if (!params) return {
            props: {
                product: null

            }
        }
        const product: IProduct = await getSingleProduct(params.id as string)

        if (!product) {

            return {
                props: {
                    product: null

                }
            }
        }

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