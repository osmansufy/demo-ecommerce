import ShopBlock from "@/components/shop/_ShopBlock";
import { getCategories } from "@/queries/getCategories";
import { getProductsByCategory } from "@/queries/getProductsByCategory";
import { IProduct } from "@/types/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";


export default function Home({ products, categories }: {
    products: IProduct[]
    categories: string[]
}) {

    const router = useRouter()

    if (router.isFallback) {
        return <div className="container">
            {/* Spinner */}

            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    }


    if (!products || !categories) {
        return <div className="container">
            <div className="text-center">
                <h1 className="text-2xl font-bold">No products found</h1>
                <button className="mt-5 bg-gray-800 text-white px-3 py-2 rounded-md"
                    onClick={() => router.push('/shop')}
                >Go back to shop</button>

            </div>
        </div>
    }



    return (

        <ShopBlock products={products}
            categories={categories}
        />
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    const categories: string[] = await getCategories()

    if (!categories) {
        return {
            paths: [],
            fallback: true
        }
    }

    const paths = categories.map((category: string) => ({
        params: { category },
    }))

    return {
        paths,
        fallback: true
    }


}


export const getStaticProps: GetStaticProps = async (context) => {

    const { params } = context

    const category = params?.category


    try {

        let products: IProduct[] = [] = await getProductsByCategory(category as string)
        const categories: string[] = await getCategories()
        if (!products) {
            return {
                fallback: true,
                props: {
                    products: [],
                    categories: []
                }
            }
        }

        return {
            props: {
                products,
                categories
            }
        }


    } catch (error) {

        return {
            fallback: true,
            props: {
                products: [],
                categories: []
            }
        }

    }

}