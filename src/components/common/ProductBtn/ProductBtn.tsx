"use client"
import { IProductProps } from '@/types/products'
import React from 'react'
import AddToCart from '../AddToCart'
import CartUpdate from '../CartUpdate'
import withCart from '@/components/HOC/withCart'

const ProductBtn = (props: IProductProps) => {

    const { product, isItemInCart, handleIncrement, handleDecrement, handleAddToCart } = props
    return (
        <>
            {
                isItemInCart && (
                    <CartUpdate
                        onIncrement={handleIncrement!}
                        onDecrement={handleDecrement!}
                        quantity={isItemInCart.quantity!}
                    />
                )
            }
            <AddToCart
                onAddToCart={handleAddToCart!}
                title={isItemInCart ? 'Go to Cart' : 'Add to Cart'}
            />
        </>
    )
}

export default withCart(ProductBtn)