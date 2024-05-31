import { create } from "zustand";
import { CategoryStoreT } from "@/common/types";
import axios from "axios";


// const CategoriesURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories?sort[0]=name:asc&populate=*`
const CategoriesURL = `http://localhost:1337/api/categories?sort[0]=name:asc&populate=*`

export const useCategoriesStore = create<CategoryStoreT>((set) => ({
    categories: [], 
    fetchCategories: async () => {
        try {
            const res = await axios.get(CategoriesURL)
            set({ categories: res.data.data.map((category: any) => category) })
        } catch (error) {
            console.log('error : ', error)
        }
    }
}));

