import ShopBlock from "@/components/shop/_ShopBlock";
import { getCategories } from "@/queries/getCategories";
import { getProducts } from "@/queries/getProducts";
import { getProductsByCategory } from "@/queries/getProductsByCategory";
import { IProduct } from "@/types/products";
import { GetStaticProps } from "next";


export default function Home({ products, categories }: {
    products: IProduct[]
    categories: string[]
}) {

    return (

        <ShopBlock products={products}
            categories={categories}
        />
    )
}


export const getStaticProps: GetStaticProps = async (context) => {

    const { params } = context

    const category = params?.category

    let products: IProduct[] = []
    try {
        if (category) {
            products = await getProductsByCategory(category as string)
        } else {
            products = await getProducts()
        }
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