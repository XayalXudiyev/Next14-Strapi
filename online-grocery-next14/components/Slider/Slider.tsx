"use client"

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { SliderProps } from "@/common/types";
import { useSliderStore } from "@/store/sliderStore";

const Slider = () => {
    // const Slider = ({ sliderList }: SliderProps) => {
    const { sliders, fetchSliders } = useSliderStore((state) => ({
        sliders: state.sliders,
        fetchSliders: state.fetchSliders,
    }));

    if (!sliders || sliders.length === 0) {
        fetchSliders();
    }
    return (
        <Carousel>
            <CarouselContent>
                {sliders?.map((slider, index) => (
                    <CarouselItem key={index}>
                        <Image
                            unoptimized={true}
                            src={
                                // process.env.NEXT_PUBLIC_BASE_URL +
                                'http://localhost:1337' +
                                slider.attributes.url.data.attributes.url}
                            width={1000}
                            height={400}
                            alt='slider'
                            className='w-full h-[150px] sm:h-[300px] md:h-[420px] object-center rounded-lg'
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default Slider