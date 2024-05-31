'use client'

import { LayoutGrid, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CategoryButton from './categories/CategoryButton'


const Navbar = () => {

  return (
    <div className='p-5 shadow-md  flex justify-between select-none'>
      <div className='flex gap-8 items-center'>
        <Link href={'/'}>
          <Image
            alt='logo'
            src='/logo.png'
            width={130}
            height={90}
            className='cursor-pointer'
          />
        </Link>
        <CategoryButton />
        <div className='hidden md:flex gap-2 border items-center rounded-full  pl-5  '>
          <Search className='h-5 w-5 ' />
          <Input
            className='ring-0 outline-none border-none rounded-full'
            placeholder='Search...'
          />
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <h2 className='flex gap-2 text-lg items-center'>
          <ShoppingCart className='h-6 w-6' />
          <span className='bg-red-600 text-white px-2 rounded-full'></span>
        </h2>
        <Button className='bg-red-600'>Login  </Button>
      </div>
    </div>
  )
}

export default Navbar 