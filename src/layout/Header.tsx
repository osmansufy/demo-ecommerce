import React from 'react'
import { navItems } from './helper'
import Link from 'next/link'



const Header = () => {
    return (
        <header className="flex justify-between w-full items-center  bg-gray-100">

            <nav
                className='flex justify-between w-full items-center  bg-gray-900'
            >
                <ul

                    className="w-1/2 flex items-center  justify-between 
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
        </header>

    )
}

export default Header