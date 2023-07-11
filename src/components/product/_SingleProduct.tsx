import { IProduct } from '@/types/products';
import Link from 'next/link';
import React from 'react';

const SingleProductPage = ({ product }: {
    product: IProduct
}) => {


    return (
        <div className="container mx-auto my-5">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={product?.image} alt={product?.title} className="w-full" />
                </div>
                <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
                    <h2 className="text-2xl font-bold mb-2">{product?.title}</h2>
                    <p className="text-gray-600 mb-4">{product?.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-bold text-lg">${product?.price}</span>
                        <Link href={`/categories/${product?.category}`}>
                            <span className="text-sm text-gray-500">{product?.category}</span>
                        </Link>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="mr-1 text-yellow-500">{product?.rating?.rate}</span>
                        <span className="text-gray-500">({product?.rating?.count} reviews)</span>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
