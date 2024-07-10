'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFilter } from '@/contexts/FilterContexts';
import Produto from './Produto';

const calculateItemsToShow = (containerWidth) => {
  const itemWidth = 235;
  const spacing = 78;
  const availableWidth = containerWidth - spacing;
  let maxItemsDesktop = Math.floor(availableWidth / (itemWidth + spacing));
  let maxItemsTablet = Math.floor(availableWidth / (itemWidth + spacing));
  let maxItemsMobile = Math.floor(availableWidth / itemWidth);

  maxItemsDesktop = Math.max(maxItemsDesktop, 1);
  maxItemsTablet = Math.max(maxItemsTablet, 1);
  maxItemsMobile = Math.max(maxItemsMobile, 1);

  return {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: maxItemsDesktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: maxItemsTablet,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: maxItemsMobile,
    },
  };
};


interface ItemsCarouselProps {
  className?: string
  tipo?: 'VocePodeGostar' | 'VistosRecentemente' | 'OutrosProdutos' | 'ProdutosSimilares'
}
export default function ItemsCarousel({
  className,
  tipo
}: ItemsCarouselProps) {
  const { List } = useFilter()

  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = calculateItemsToShow(containerWidth);

  switch (tipo) {
    default:
      return (
          <section className={clsx(
            'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-[#E7E7E7] overflow-hidden',
          className)}>
            <h3> Você pode gostar </h3>   

          <Carousel responsive={responsive} autoPlay={true} infinite={true}>
              {/* Lista &&
                Lista.map((item: any) => (
                  <li key={item.id}>
                    <Produto {...} />
                  </li>
                ))
              */}
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
          </Carousel>


          </section>
        )
        case 'VistosRecentemente':
        return (
          <section className={clsx(
            'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-[#E7E7E7] overflow-hidden',
          className)}>
            <h3> Vistos Recentemente </h3>   

          <Carousel responsive={responsive} autoPlay={true} infinite={true}>
              {/* Lista &&
                Lista.map((item: any) => (
                  <li key={item.id}>
                    <Produto {...} />
                  </li>
                ))
              */}
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
          </Carousel>


          </section>
        )
        case 'OutrosProdutos':
        return (
          <section className={clsx(
            'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-[#E7E7E7] overflow-hidden',
          className)}>
            <h3> Outros Produtos </h3>   

          <Carousel responsive={responsive} autoPlay={true} infinite={true}>
              {/* Lista &&
                Lista.map((item: any) => (
                  <li key={item.id}>
                    <Produto {...} />
                  </li>
                ))
              */}
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
          </Carousel>


          </section>
        )
      case 'ProdutosSimilares':
        return (
          <section className={clsx(
            'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-[#E7E7E7] overflow-hidden',
          className)}>
            <h3> Produtos Similares </h3>   

          <Carousel responsive={responsive} autoPlay={true} infinite={true}>
              {/* Lista &&
                Lista.map((item: any) => (
                  <li key={item.id}>
                    <Produto {...} />
                  </li>
                ))
              */}
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
              <Produto  />
          </Carousel>


          </section>
        )
  }
}