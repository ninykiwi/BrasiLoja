"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import Arrow from '../../../public/icons/setaCarrossel.svg'
import Image from 'next/image'; // Importe o componente Image do Next.js

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
      sliderRef.current.slickGoTo(0); 
    }
  }, []);

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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

  function PrevArrow(props: any) {
    const { className } = props;
    return (
      <div className={className} onClick={goToPrev} style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", zIndex: 1 }}>
        <Image src={Arrow} alt="Previous" width={40} height={40} />
      </div>
    );
  }

  function NextArrow(props: any) {
    const { className } = props;
    return (
      <div className={className} onClick={goToNext} style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 1 }}>
        <Image src={Arrow} alt="Next" width={40} height={40}  style={{ transform: 'rotate(180deg)' }} />
      </div>
    );
  }

  return (
    <section className='w-full'>
      <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className='flex flex-col lg:w-[280px] lg:h-[154px] mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-gray-200 overflow-hidden'
      >
        <Slider ref={sliderRef} {...settings} className='flex h-[450px] mt-[12px] gap-[20px] lg:gap-[40px] overflow-hidden'>
          {slice.primary.carousel.map((item, index) => (
            <div
              className={clsx('flex w-[280px] lg:w-[1224px] h-[154px] lg:h-[450px] py-[12px] lg:py-[20px] px-[14px] lg:px-[70px]',
                item.banner_type === 'Type 1 (image to the right)' && 'flex-row',
                item.banner_type === 'Type 2 (image to the left)' && 'flex-row-reverse'
              )}
              key={index}
            >
              <div className="flex flex-col max-w-[40%]">
                <h2 className="font-display">{item.banner_title}</h2>
                <p className="subtitle font-display">{item.banner_subtitle}</p>
                <PrismicNextLink field={item.link_to_product}>
                  <button className="flex w-[60px] h-[28px] py-[5px] px-[1px] bg-blue-500 rounded-sm text-white text-[11px] font-black">
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
