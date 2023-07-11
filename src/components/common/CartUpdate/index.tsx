import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'

const CartUpdate = () => {
    return (
        <div className="inline-flex items-center mt-2">
            <Decrement />

            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">

                2
            </div>
            <Increment />
        </div>
    )
}

export default CartUpdate