import { CategoryT, SliderT } from "@/common/types"
import axios from "axios"

// const URLs = `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories?populate=*`
const URLs = `http://localhost:1337/api/categories?populate=*`


export const getCategories = async (): Promise<CategoryT[]> => {
    const res = await axios.get(URLs)
    const data = res.data.data
    return data

} 