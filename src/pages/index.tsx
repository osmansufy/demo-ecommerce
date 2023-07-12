import ShopBlock from "@/components/shop/_ShopBlock";
import { getCategories } from "@/queries/getCategories";
import { getProducts } from "@/queries/getProducts";
import { IProduct } from "@/types/products";
import { GetStaticProps } from "next";


export default function Home({ products, categories }: {
  products: IProduct[]
  categories: string[]
}) {

  if (!products) return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-2xl font-bold">No products found</h1>

      </div>
    </div>
  )

  return (

    <ShopBlock products={products}
      categories={categories}
    />
  )
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const products: IProduct[] = await getProducts()
    console.log({ products })
    const categories: string[] = await getCategories()
    if (!products) {
      return {
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
      props: {
        products: [],
        categories: []
      }
    }

  }

}