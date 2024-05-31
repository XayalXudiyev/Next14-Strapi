import { getProducts } from "@/actions/getProducts";
import Categories from "@/components/Categories/Categories";
import Products from "@/components/Products/Products";
import Slider from "@/components/Slider/Slider";

export default async function Home() {
  // const sliderList = await getSlider()
  // const categoryList = await getCategories()    
  const productList = await getProducts()


  return (
    <div className="px-3 ">
      {/* <Slider sliderList={sliderList} /> */}
      <Slider />
      <Categories />
      <Products productList={productList} />
    </div>
  );
}
