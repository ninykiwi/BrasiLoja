import React, { useEffect, useRef } from 'react'
import clsx from 'clsx';
import Arrow from '@/public/icons/setaCarrossel.svg'
import Image from 'next/image'; 
import Slider from 'react-slick';

export interface CarouselProps {
  className?: string;
  arrowsClassName?: string;
  children: React.ReactNode;
}


export default function Carousel({
  className,
  arrowsClassName,
  children,
  ...restProps
}: CarouselProps) {
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

  const sliderSettings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
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
      <div className={clsx('z-10 absolute left-0 top-[50%] translate-y-[50%]', className)} onClick={goToPrev}>
        <Image src={Arrow} alt="Previous" width={40} height={40} />
      </div>
    );
  }
  function NextArrow(props: any) {
    const { className } = props;
    return (
      <div className={clsx('z-10 absolute right-0 top-[50%] translate-y-[50%]', className)} onClick={goToNext}>
        <Image src={Arrow} alt="Next" width={40} height={40}  style={{ transform: 'rotate(180deg)' }} />
      </div>
    );
  }

  return (
    <Slider ref={sliderRef} {...sliderSettings} className={clsx('flex h-[450px] mt-[12px] gap-[20px] lg:gap-[40px] overflow-hidden', className)} {...restProps}>

      {children}

    </Slider>
  )
}


