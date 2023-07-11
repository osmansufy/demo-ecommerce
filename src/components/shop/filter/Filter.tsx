import { SortBy, sortOptions } from '@/enums/sortBy'
import CheckHelper from '@/utility/checkHelper'
import { useRouter } from 'next/router'
import React from 'react'

const Filter = ({
    categories
}: {
    categories: string[]
}) => {

    const router = useRouter()

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

        router.push(`/shop?sort=${e.target.value}`)

    }



    return (
        <div className="flex justify-between items-center mb-5 border  
        p-4 rounded-md border-gray-300
        ">

            <div className="flex items-center gap-4 uppercase">

                <span>filter by</span>
                <select
                    className="border border-gray-500 rounded-md text-gray-500 text-sm px-2 py-1 uppercase
                    "
                    name="category"
                    id="category"

                    onChange={handleCategoryChange}
                >

                    <option value="all"
                        selected={router.query.category === 'all'}
                    >all</option>
                    {!CheckHelper.isEmptyArray(categories) &&
                        categories.map((category) => (
                            <option key={category}
                                className='capitalize'
                                selected={router.query.category === category}
                                value={category}>{category}</option>
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
                    defaultValue={SortBy.Default}
                    onChange={handleSortChange}
                >
                    {
                        sortOptions.map((sort) => (
                            <option key={sort.value}
                                selected={router.query.sort === sort.value}
                                value={sort.value}>{sort.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Filter