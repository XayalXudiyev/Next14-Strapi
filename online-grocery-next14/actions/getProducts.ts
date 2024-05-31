import { ProductT } from "@/common/types";
import axios from "axios";

// const ProductURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?populate=*`;
const ProductURL = `http://localhost:1337/api/products?populate=*`;

export const getProducts = async (): Promise<ProductT[]> => {
    const res = await axios.get(ProductURL);
    const data = res.data.data;
    return data
};
