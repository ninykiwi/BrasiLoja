'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Produto from './Produto';

import fone from '../public/images/fone.png';
import nintendo0 from '../public/images/nintendo0.png';
import nintendo5 from '../public/images/nintendo5.png';
import nintendo4 from '../public/images/nintendo4.png';
import nintendo2 from '../public/images/nintendo2.png';

const calculateItemsToShow = (containerWidth) => {
  const itemWidth = 235;
  const spacing = 78;
  const itemWidthMobile = 120;
  const spacingMobile = 39;
  const availableWidth = containerWidth - spacing;
  const availableWidthMobile = containerWidth - spacingMobile;
  let maxItemsDesktop = Math.floor(availableWidth / (itemWidth + spacing));
  let maxItemsTablet = Math.floor(availableWidthMobile / (itemWidthMobile + spacingMobile));
  let maxItemsMobile = Math.floor(availableWidthMobile / itemWidthMobile);

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

const mockProducts = [
  { id: 1, nome: 'Fone', imagem: fone.src, preco: '100,00' },
  { id: 2, nome: 'Nintendo 0', imagem: nintendo0.src, preco: '200,00' },
  { id: 3, nome: 'Nintendo 5', imagem: nintendo5.src, preco: '300,00' },
  { id: 4, nome: 'Nintendo 4', imagem: nintendo4.src, preco: '00,00' },
  { id: 5, nome: 'Nintendo 2', imagem: nintendo2.src, preco: '500,00' },
];

interface ItemsCarouselProps {
  className?: string;
  tipo?: 'VocePodeGostar' | 'VistosRecentemente' | 'OutrosProdutos' | 'ProdutosSimilares';
}

export default function ItemsCarousel({ className, tipo }: ItemsCarouselProps) {
  const [containerWidth, setContainerWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const responsive = calculateItemsToShow(containerWidth);

  return (
    <section
      className={clsx(
        'flex flex-col w-full px-[14px] py-[17px] gap-[14px] overflow-hidden',
        className
      )}
    >
      <h3 className='text-[16px] lg:text-[40px] font-bold'>{tipo}</h3>
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        {mockProducts.length > 0 ? (
          mockProducts.map((item) => (
            <div key={item.id}>
              <Produto nome={item.nome} imagem={item.imagem} preco={item.preco} />
            </div>
          ))
        ) : (
          <p>Sem itens para mostrar</p>
        )}
      </Carousel>
    </section>
  );
}
