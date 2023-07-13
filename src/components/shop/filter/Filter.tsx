"use client"
import { sortOptions } from '@/enums/sortBy'
import CheckHelper from '@/utility/checkHelper'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import React from 'react'
import parse from 'html-react-parser'
const Filter = ({
    categories
}: {
    categories: string[]
}) => {

    const router = useRouter()
    const { category } = useParams()
    const searchParams = useSearchParams()
    const sort = searchParams.get('sort')
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        // check if category is all and redirect to shop page
        if (e.target.value === 'all') {
            router.push('/shop')
            return
        }

        const category = e.target.value
        router.push(`/categories/${category}`)
    }

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {



        const sort = e.target.value

        if (category) {
            router.push(`/categories/${category}?sort=${sort}`)

        } else {
            router.push(`/shop?sort=${sort}`)

        }


    }


    console.log(category && parse(category as string))
    return (
        <div className="flex justify-between md:items-center mb-5 border  
        p-4 rounded-md border-gray-300 gap-y-3
        flex-col md:flex-row
        ">

            <div className="flex items-center gap-4 uppercase">

                <span>filter by</span>
                <select
                    className="border border-gray-500 rounded-md text-gray-500 text-sm px-2 py-1 uppercase
                    "
                    name="category"
                    id="category"
                    defaultValue={category ? parse(category as string) as string : 'all'}
                    onChange={handleCategoryChange}
                >

                    <option value="all"

                    >all</option>
                    {!CheckHelper.isEmptyArray(categories) &&
                        categories.map((singleCat) => (
                            <option key={singleCat}
                                className='capitalize'
                                selected={category === singleCat}
                                value={singleCat}>{singleCat}</option>
                        ))
                    }
                </select>


            </div>
            <div className="flex uppercase items-center gap-4">
                <span>sort by</span>
                <select
                    className="border border-gray-300 rounded-md px-2 py-1 uppercase text-gray-500 text-sm"
                    name="sort"
                    id="sort"
                    onChange={handleSortChange}
                    defaultValue={sort as string}
                >
                    {
                        sortOptions.map((sort) => (
                            <option key={sort.value}

                                value={sort.value}>{sort.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Filter