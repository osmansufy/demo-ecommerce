import React from 'react'

const Decrement = () => {
    return (
        <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >

                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                />
            </svg>
        </button>
    )
}

export default Decrement