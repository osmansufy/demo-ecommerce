import { useAppSelector } from '@/redux/hook'
import Link from 'next/link'
import { navItems } from './helper'



const Header = () => {

    const { items } = useAppSelector(state => state.cart)
    return (
        <header className="flex justify-between   px-3 items-center  bg-gray-100">

            <nav
                className='flex justify-between   w-full items-center  bg-gray-900'
            >
                <ul

                    className=" mx-auto flex items-center  justify-between 
                p-4">
                    {
                        navItems.map((item) => (

                            <li key={item.name} className="px-2">
                                <Link href={item.path}>
                                    <span className="text-blue-500 hover:text-blue-700">{item.name}</span>
                                </Link>
                            </li>
                        ))

                    }
                </ul>


            </nav>
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





        </header>

    )
}

export default Header