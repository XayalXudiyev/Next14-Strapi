import { ProductT } from '@/common/types';
import Image from 'next/image';
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import ProductItemDetail from './ProductItemDetail';

interface ProductItemProps {
    product: ProductT;

}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className='p-2 md:p-4 lg:p-6 flex flex-col items-center justify-end gap-4 border rounded-xl hover:shadow-lg transition-all  cursor-pointer'>
            <Image
                unoptimized={true}
                src={
                     // process.env.NEXT_PUBLIC_BASE_URL +
                     'http://localhost:1337' +
                    product?.attributes?.images?.data?.attributes?.url
                }
                alt={'Product'}
                width={200}
                height={300}
            />
            <h2 className='font-bold text-lg'>{product.attributes.name}</h2>
            <div className='flex gap-3 '>
                {product?.attributes?.sellingPrice &&
                    <h2>${product?.attributes?.sellingPrice}</h2>}
                <h2 className={product?.attributes?.sellingPrice ? "line-through text-gray-400" : undefined}>${product?.attributes?.mrp}</h2>
            </div>


            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline' className='bg-green-600 text-white'>
                        Add To Cart
                    </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[750px]:'>
                    <DialogHeader>
                        <DialogDescription>
                            <ProductItemDetail product={product} />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ProductItem