"use client"
import { useAppSelector } from '@/redux/hook'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
    const { items } = useAppSelector(state => state.cart)

    return (
        <div className="cart ">
            <Link href="/cart">
                <p className="flex items-center justify-center  px-2 border-spacing-1 py-3  bg-blue-500 rounded text-white">
                    <span className="text-xl font-semibold">🛒</span>
                    <sup className="text-sm font-semibold">{
                        items.length
                    }</sup>
                </p>
            </Link>

        </div>
    )
}

export default Cart