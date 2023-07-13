import { useAppSelector } from '@/redux/hook';
import SingleCartItem from './SingleCartItem';
import TotalSum from './TotalSum';

const CartPage = () => {

    const { items } = useAppSelector(state => state.cart)

    if (items.length === 0) return (
        <div className="h-screen flex justify-center items-center">
            <h1 className="text-2xl font-bold">No Items in Cart</h1>
        </div>
    )



    return (
        <div className="container mx-auto my-5">
            <div className=" bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">

                        {
                            items.map((item) => (
                                <SingleCartItem key={item.id} product={item} />
                            ))
                        }
                    </div>
                    {/* Sub total */}
                    <TotalSum />
                </div>
            </div>
        </div>

    );
};

export default CartPage;
