import { IProduct } from '@/types/products'
import CheckHelper from '@/utility/checkHelper'
import React, { useMemo, useState } from 'react'
import ProductCard from '../common/ProductCard'
import Filter from './filter/Filter'
import { useRouter } from 'next/router'
import { sortProducts } from '@/utility/sortProducts'
import { SortBy } from '@/enums/sortBy'

const ShopBlock = ({ products, categories }: {
    products: IProduct[]
    categories: string[]
}) => {

    const router = useRouter()

    // sort products by price or name 

    const sort = router.query.sort




    const filteredProducts = useMemo(() => {

        if (sort && products) {
            return sortProducts(products, sort as SortBy)
        } else {
            return products
        }


    }, [products, sort])
    // check if products exist and return not found if not

    if (CheckHelper.isEmptyArray(products)) return (
        <div className="container">
            <div className="text-center">
                <h1 className="text-2xl font-bold">No products found</h1>
                <button className="mt-5 bg-gray-800 text-white px-3 py-2 rounded-md"
                    onClick={() => router.push('/shop')}
                >Go back to shop</button>

            </div>
        </div>

    )

    return (
        <div className="container mx-auto my-5">

            {/* filter & sorting section */}

            <Filter categories={categories} />



            <div className='  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    filteredProducts.map((product: IProduct) => (

                        <ProductCard key={product.id} product={product} />

                    ))


                }
            </div>
        </div>
    )
}

export default ShopBlock