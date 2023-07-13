"use client"

import { removeFromCart } from '@/redux/features/cart/cartSlice'
import { useAppDispatch } from '@/redux/hook'
import { IProductProps } from '@/types/products'
import React from 'react'
import withCart from '../HOC/withCart'

const CartBtns = (props: IProductProps) => {

    const { product, isItemInCart, handleIncrement, handleDecrement, handleAddToCart } = props
    const dispatch = useAppDispatch()
    const handleRemove = () => {
        dispatch(removeFromCart(product.id))
    }
    return (
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
                <span
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 font-bold duration-100 hover:bg-blue-500 hover:text-blue-50">
                    -
                </span>
                <input
                    className="h-8 w-8 border   appearance-none  bg-white text-center text-xs outline-none"
                    type="text"
                    value={product.quantity}
                />
                <span
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    +
                </span>
            </div>
            <div className="flex items-center space-x-4">
                <p className="text-sm">{product.price}$</p>
                <svg
                    onClick={handleRemove}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
        </div>
    )
}

export default withCart(CartBtns)