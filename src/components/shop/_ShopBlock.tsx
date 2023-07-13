
import { IProduct } from '@/types/products'
import CheckHelper from '@/utility/checkHelper'
import ProductCard from '../common/ProductCard'
import Filter from './filter/Filter'
import { sortProducts } from '@/utility/sortProducts'
import { SortBy } from '@/enums/sortBy'


const ShopBlock = ({ products, categories, searchParams }: {
    products: IProduct[]
    categories: string[],
    searchParams: { [key: string]: string | string[] | undefined }
}) => {

    if (searchParams && searchParams['sort']) {

        products = sortProducts(products, searchParams['sort'] as SortBy)
    }
    // check if products exist and return not found if not

    if (CheckHelper.isEmptyArray(products)) return (
        <div className="container">
            <div className="text-center">
                <h1 className="text-2xl font-bold">No products found</h1>
            </div>
        </div>

    )

    return (
        <div className="container mx-auto my-5">

            {/* filter & sorting section */}

            <Filter categories={categories} />



            <div className='  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ShopBlock