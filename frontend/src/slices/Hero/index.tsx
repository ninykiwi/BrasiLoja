"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useRef } from "react";
import Carousel from "@/components/Carousel"
// Importe o componente Image do Next.js

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices using Slick Carousel.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  return (
    <section className='w-full'>
      <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className='flex flex-col w-full lg:w-[280px] lg:h-[154px] py-[17px] gap-[14px] overflow-hidden'
      >
        <Carousel>
          {slice.primary.carousel.map((item, index) => (
            <div
              className='flex flex-row w-[280px] lg:w-[1224px] h-[154px] lg:h-[450px] py-[12px] lg:py-[20px] px-[14px] lg:px-[70px]' key={index} style={{ backgroundColor: `${item.banner_color}` }} >

              <div className="flex flex-col w-[40vw]">
                <h2 className="font-display max-w-[90%]">{item.banner_title}</h2>
                <p className="subtitle font-display max-w-full">{item.banner_subtitle}</p>
                <PrismicNextLink field={item.link_to_product}>
                  <button className="flex w-[60px] h-[28px] py-[5px] px-[1px] bg-blue-500 rounded-[4px] text-white text-[11px] font-black">
                    COMPRAR
                  </button>
                </PrismicNextLink>
              </div>

              <PrismicNextImage className='w-fit max-w-[40%]' field={item.banner_image} />

            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default Hero;
