

import Link from 'next/link';
import { navItems } from './helper';
import Cart from './Cart';

const Header = () => {

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


            <Cart />



        </header>

    )
}

export default Header