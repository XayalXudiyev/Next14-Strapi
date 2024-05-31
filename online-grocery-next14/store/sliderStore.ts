import { SliderStoreT, SliderT } from "@/common/types";
import { create } from "zustand";
import axios from "axios";



// const SliderURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/sliders?populate=*`
const SliderURL = `http://localhost:1337/api/sliders?populate=*`

export const useSliderStore = create<SliderStoreT>((set) => ({
    sliders: [],
    fetchSliders: async () => {
        try {
            const res = await axios.get(SliderURL)
            set({ sliders: res.data.data.map((slider: any) => slider) })
        } catch (error) {
            console.log('error : ', error)

        }
    }
}));