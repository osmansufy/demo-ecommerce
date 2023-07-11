import React from 'react'
import { navItems } from './helper'
import Link from 'next/link'
import { useAppSelector } from '@/redux/hook'



const Header = () => {

    const { items } = useAppSelector(state => state.cart)
    return (
        <header className="flex justify-between  sticky top-0 z-50  w-full items-center  bg-gray-100">

            <nav
                className='flex justify-between   w-full items-center  bg-gray-900'
            >
                <ul

                    className="w-80 mx-auto flex items-center  justify-between 
                p-4">
                    {
                        navItems.map((item) => (

                            <li key={item.name} className="ml-4">
                                <Link href={item.path}>
                                    <span className="text-blue-500 hover:text-blue-700">{item.name}</span>
                                </Link>
                            </li>
                        ))

                    }
                </ul>


            </nav>
            <div className="cart">
                <Link href="/cart">
                    <p className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                        <span className="text-xl font-semibold">🛒</span>
                        <sup className="text-sm font-semibold">{
                            items.length
                        }</sup>
                    </p>
                </Link>

            </div>
        </header>

    )
}

export default Header