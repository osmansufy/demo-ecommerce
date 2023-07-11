import { addToCart, removeSingle } from "@/redux/features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { IProduct } from "@/types/products"
import { useRouter } from "next/router"
import { useMemo } from "react"

function withCart<T extends {
    product: IProduct
}>(Component: React.ComponentType<T>
) {


    function UpdatedComponent(props: T) {
        const product = props.product
        const router = useRouter()
        const dispatch = useAppDispatch()

        const { items } = useAppSelector(state => state.cart)

        const handleAddToCart = () => {
            if (isItemInCart) {
                return router.push('/cart')
            } else {
                dispatch(addToCart(product))
            }
        }

        const isItemInCart = useMemo(() => {
            return items.find(item => item.id === product.id)

        }, [items, product.id])

        const handleIncrement = () => {
            dispatch(addToCart(product))
        }

        const handleDecrement = () => {
            dispatch(removeSingle(product.id))
        }
        return (
            <Component
                {...props as T}
                handleAddToCart={handleAddToCart}
                isItemInCart={isItemInCart}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
        )


    }
    return UpdatedComponent



}

export default withCart