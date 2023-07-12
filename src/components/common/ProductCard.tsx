import Link from 'next/link'
import withCart from '../HOC/withCart'
import Rating from '../Icons/Rating'
import AddToCart from './AddToCart'
import CartUpdate from './CartUpdate'
import { IProduct, IProductProps } from '@/types/products'

const ProductCard = (props: IProductProps) => {
    const { product, isItemInCart, handleIncrement, handleDecrement, handleAddToCart } = props


    return (
        <div className=" bg-white shadow rounded flex flex-col justify-between">
            <Link href={`/products/${product?.id}`}>
                <div
                    className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url(${product.image})`
                    }}
                >


                    <div>

                        <span className="flex w-24 bg-green-50 p-0.5 border-green-500 border rounded text-red-700 font-medium select-none">

                            {
                                Array.from(Array(
                                    Math.floor(product.rating.rate || 0)
                                ).keys()).map((_, index) => (
                                    <Rating key={index} />
                                ))

                            }
                        </span>
                    </div>
                </div>
            </Link>
            <div className="p-4 flex flex-col h-full justify-between items-center">

                <p className="text-gray-400 font-light text-xs text-center">

                    {product?.category || 'category'}
                </p>
                <h1 className="text-gray-800 text-center mt-1">{product?.title || ""}</h1>
                <p className="text-center text-gray-800 mt-1">€{product?.price}</p>
                {
                    isItemInCart && (
                        <CartUpdate
                            onIncrement={handleIncrement!}
                            onDecrement={handleDecrement!}
                            quantity={isItemInCart.quantity!}
                        />
                    )
                }
                <AddToCart
                    onAddToCart={handleAddToCart!}
                    title={isItemInCart ? 'Go to Cart' : 'Add to Cart'}
                />

            </div>
        </div>

    )
}

export default withCart(ProductCard)