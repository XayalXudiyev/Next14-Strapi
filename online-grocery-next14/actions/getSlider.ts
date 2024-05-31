import { SliderT } from "@/common/types"
import axios from "axios"

// const URLs = `${process.env.NEXT_PUBLIC_BASE_URL}/api/sliders?populate=*`
const URLs = `http://localhost:1337/api/sliders?populate=*`


export const getSlider = async (): Promise<SliderT[]> => {
    const res = await axios.get(URLs)
    const data = res.data.data
    return data
}