import ShopBlock from '@/components/shop/_ShopBlock'
import { getCategories } from '@/queries/getCategories'
import { getProducts } from '@/queries/getProducts'
import { IProduct } from '@/types/products'
import Image from 'next/image'

export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [products, categories] = await Promise.allSettled([getProducts(), getCategories()])
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
