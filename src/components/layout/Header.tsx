

import Link from 'next/link';
import { navItems } from './helper';
import Cart from './Cart';

const Header = () => {

    return (

        <header className="flex justify-between    items-center  bg-gray-400">

            <nav
                className='flex justify-between   w-full items-center  '
            >
                <ul

                    className=" mx-auto flex items-center  justify-between 
                p-4">
                    {
                        navItems.map((item) => (

                            <li key={item.name} className="px-2">
                                <Link href={item.path}>
                                    <span className=" text-primary-500 hover:text-primary-600 cursor-pointer
                                    
                                    ">{item.name}</span>
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