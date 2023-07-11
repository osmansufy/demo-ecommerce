import { IProduct } from '@/types/products'
import React from 'react'
import Rating from '../Icons/Rating'
import Link from 'next/link'
import AddToCart from './AddToCart'
import CartUpdate from './CartUpdate'
import { addToCart } from '@/redux/features/cart/cartSlice'
import { useAppDispatch } from '@/redux/hook'

const ProductCard = ({ product }: {
    product: IProduct
}) => {

    const dispatch = useAppDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }
    return (
        <div className="w-80 bg-white shadow rounded">
            <Link href={`/products/${product?.id}`}>
                <div
                    className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url(${product.image})`
                    }}
                >


                    <div>

                        <span className="flex w-24 bg-green-50 p-0.5 border-green-500 border rounded text-red-700 font-medium select-none">

                            {
                                Array.from(Array(
                                    Math.floor(product.rating.rate || 0)
                                ).keys()).map((_, index) => (
                                    <Rating key={index} />
                                ))

                            }
                        </span>
                    </div>
                </div>
            </Link>
            <div className="p-4 flex flex-col items-center">

                <p className="text-gray-400 font-light text-xs text-center">

                    {product?.category || 'category'}
                </p>
                <h1 className="text-gray-800 text-center mt-1">{product?.title || ""}</h1>
                <p className="text-center text-gray-800 mt-1">€{product?.price}</p>
                <CartUpdate />
                <AddToCart
                    onAddToCart={handleAddToCart}

                />

            </div>
        </div>

    )
}

export default ProductCard