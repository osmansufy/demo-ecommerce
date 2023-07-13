import ShopBlock from '@/components/shop/_ShopBlock'
import { getCategories } from '@/queries/getCategories'
import { getProductsByCategory } from '@/queries/getProductsByCategory'

export default async function CategoryProduct({
    params,
    searchParams
}: {
    params: { category: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const [products, categories] = await Promise.allSettled([getProductsByCategory(params.category), getCategories()])
    if (products.status === 'rejected' || categories.status === 'rejected') {
        return <div>Something went wrong</div>
    }
    if (products.status === 'fulfilled' && categories.status === 'fulfilled') {

        return (
            <div className="container mx-auto my-5">
                <ShopBlock
                    searchParams={searchParams}
                    products={products.value!}
                    categories={categories.value!} />
            </div>
        )
    }
}
