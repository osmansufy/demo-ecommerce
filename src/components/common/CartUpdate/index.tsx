import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'

const CartUpdate = ({
    onIncrement,
    onDecrement,
    quantity
}: {
    onIncrement: () => void
    onDecrement: () => void
    quantity: number
}) => {
    return (
        <div className="inline-flex items-center mt-2">
            <Decrement

                onDecrement={onDecrement}
            />

            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">

                {quantity}
            </div>
            <Increment
                onIncrement={onIncrement}
            />
        </div>
    )
}

export default CartUpdate