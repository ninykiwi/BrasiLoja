"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices using Slick Carousel.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide initially
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='w-full'>
      <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className='flex flex-col lg:w-[100%] lg:h-[100%] mx-[100%] lg:mx-[100%] px-[100%] py-[100%] overflow-hidden'
      >
        <Slider ref={sliderRef} {...settings}>
          {slice.primary.carousel.map((item, index) => (
            <div
              className={clsx('flex w-full h-[450px] lg:h-[450px] py-[12px] lg:py-[20px] px-[14px] lg:px-[70px]',
                item.banner_type === 'Type 1 (image to the right)' && 'flex-row',
                item.banner_type === 'Type 2 (image to the left)' && 'flex-row-reverse'
              )}
              key={index}
            >
              <div className="flex flex-col max-w-[40%]">
                <h2 className="font-display">{item.banner_title}</h2>
                <p className="subtitle font-display">{item.banner_subtitle}</p>
                <PrismicNextLink field={item.link_to_product}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    COMPRAR
                  </button>
                </PrismicNextLink>
              </div>
              <PrismicNextImage className='max-w-[40%]' field={item.banner_image} />
            </div>
          ))}
        </Slider>

        <Link className='place-self-end underline font-black text-[11px]' href='/'> Ver mais </Link>

      </div>
    </section>
  );
};

export default Hero;
