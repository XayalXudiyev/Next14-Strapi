"use client";
import { useCategoriesStore } from "@/store/categoriesStore";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Categories = () => {
    const { categories, fetchCategories } = useCategoriesStore((state) => ({
        categories: state.categories,
        fetchCategories: state.fetchCategories,
    }));

    // if (!categories || categories.length === 0) {
    //     fetchCategories();
    // }

    const [_, setFetch] = useState(true);

    if (false) {
        fetchCategories();
        setFetch(true);
    }
    return (
        <div className="mt-10 ">
            <h2 className="text-gray-700 font-bold text-2xl">Shop By Category</h2>
            <div className="grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 mt-2">
                {categories?.map((category, index) => (
                    <Link
                        key={index}
                        href={"/product-category/" + category?.name}
                        className="flex flex-col items-center justify-center p-3 bg-green-100 cursor-pointer hover:bg-green-500 rounded gap-2 group"
                    >
                        <Image
                            unoptimized={true}
                            src={
                                // process.env.NEXT_PUBLIC_BASE_URL +
                                'http://localhost:1337' +
                                category?.attributes?.icon?.data?.attributes?.url
                            }
                            width={40}
                            height={40}
                            alt="category"
                            className=" object-center rounded-lg"
                        />
                        <h2 className="text-green-700 group-hover:text-white">{category?.attributes?.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
