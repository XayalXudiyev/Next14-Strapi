import { LayoutGrid } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useCategoriesStore } from "@/store/categoriesStore";
import Link from "next/link";
import Image from "next/image";

const CategoryButton = () => {
  const { categories, fetchCategories } = useCategoriesStore((state) => ({
    categories: state.categories,
    fetchCategories: state.fetchCategories,
  }));

  const [fetched, setFetched] = useState(true);

  if (fetched) {
    fetchCategories();
    setFetched(false);
  }
  // fetchCategories();  bu sadəcə belə olduqda sonsuz request atır


  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <h2 className="hidden md:flex  gap-2  border items-center rounded-full p-2 px-8  bg-slate-200 cursor-pointer">
            <LayoutGrid className="h-5 w-5 " /> Category
          </h2>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Browse category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categories?.map((category, x) => (
            <Link key={x} href={"/product-category/" + category?.name}>
              <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                <Image
                  alt="icon"
                  width={30}
                  height={30}
                  unoptimized={true}
                  priority={true}
                  src={
                    // process.env.NEXT_PUBLIC_BASE_URL +
                    'http://localhost:1337' +
                    category?.attributes?.icon?.data?.attributes?.url
                  }
                />

                <h2> {category?.attributes?.name}</h2>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoryButton;
