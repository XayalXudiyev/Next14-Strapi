"use client"

import { ProductT } from '@/common/types'
import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'
import { Button } from '../ui/button'
import { LoaderCircle, ShoppingBasket } from 'lucide-react'
import { Product, useCart } from '@/store/useCart'

interface ProductItemDetailProps {
    product: ProductT
}

const ProductItemDetail = ({ product }: ProductItemDetailProps) => {

    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(false)
    const [productTotalPrice, setProductTotalPrice] = useState(
        product?.attributes?.sellingPrice
    )
    console.log(productTotalPrice)

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const cart = useCart()
    const [totalPrice, setTotalPrice] = useState(0)


    const AddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        setLoading(true)

        const productToAdd: Product = { ...product, quantity, total: quantity * product.attributes.sellingPrice }
        cart.addItem(productToAdd, quantity, productToAdd.total);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + productToAdd.total)


        setLoading(false)

    }

    return (
        <div className='w-full  select-none'>
            <div className='grid grid-cols-1 md:grid-cols-2 p-7 gap-8 bg-white to-black'>
                <Image
                    unoptimized={true}
                    src={
                        // process.env.NEXT_PUBLIC_BASE_URL +
                        'http://localhost:1337' +
                        + product?.attributes?.images?.data?.attributes?.url
                    }
                    alt={'Product'}
                    width={200}
                    height={300}
                />
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-semibold '> {product.attributes.name}</h2>
                    <p className='text-sm'>
                        {product.attributes.description}
                    </p>
                    <div>{product?.attributes?.sellingPrice &&
                        <h2 className='font-bold text-3xl'>
                            ${product?.attributes?.sellingPrice}
                        </h2>}
                        <h2 className={product?.attributes?.sellingPrice ? "font-bold text-3xl line-through text-gray-400" : undefined}>
                            ${product?.attributes?.mrp}
                        </h2>
                    </div>
                    <h2 className='text-2xl font-bold'>Quantity ({product.attributes.itemQuantityType})</h2>
                    <div className='flex flex-col items-baseline gap-4'>
                        <div className='gap-3 flex items-center'>
                            <div className='border flex icon gap-8 items-center justify-center bg-slate-100'>
                                <button
                                    className='py-2 px-4 pr-1 text-xl  hover:scale-125'
                                    disabled={quantity == 1}
                                    onClick={decrementQuantity}
                                > - </button>
                                <h2 className='font-bold text-green-700'>{quantity}</h2>
                                <button
                                    className='py-2 px-4 pl-1 text-xl hover:scale-125'
                                    onClick={incrementQuantity}
                                > + </button>
                            </div>
                            <h2>${(quantity * productTotalPrice).toFixed(2)}</h2>
                        </div>

                        <Button disabled={loading} onClick={AddToCart}>
                            <ShoppingBasket />
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Add to Cart'}
                        </Button>

                    </div>

                    <h2 >
                        <span className='mr-2 font-bold' >Category  :</span>
                        {product?.attributes?.categories?.data?.attributes?.name}
                    </h2>

                </div>
            </div>
        </div >
    )
}

export default ProductItemDetail