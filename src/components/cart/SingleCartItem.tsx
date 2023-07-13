import { IProduct } from '@/types/products'
import Link from 'next/link'
import CartBtns from './CartBtns'

const SingleCartItem = ({
    product
}: {
    product: IProduct
}) => {

    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
                src={product.image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <Link href={`/products/${product.id}`}>
                        <h2 className="text-lg font-bold text-gray-900">
                            {
                                product.title
                            }
                        </h2>
                    </Link>
                    <p className="mt-1 text-xs text-gray-700">{
                        product.category
                    }</p>
                </div>
                <CartBtns product={product} />
            </div>
        </div>
    )
}

export default SingleCartItem