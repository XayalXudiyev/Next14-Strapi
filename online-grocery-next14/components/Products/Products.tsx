import { ProductProps } from '@/common/types'
import React from 'react'
import ProductItem from './ProductItem'



const Products = ({ productList }: ProductProps) => {
    return (
        <div className="mt-10 ">
            <h2 className="text-gray-700 font-bold text-2xl">Shop By Product</h2>
            <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-4'>
                {
                    productList.map((product, index: number) => (
                        <ProductItem key={index} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products