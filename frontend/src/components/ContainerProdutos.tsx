'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
//-- PRISMIC
import { createClient } from '@/prismicio';
import { components } from '@/slices'
//-- CONTEXTs
//-- PRISMIC
import { createClient } from '@/prismicio';
import { components } from '@/slices'
//-- CONTEXTs
import { useFilter } from '@/contexts/FilterContexts';
//-- TYPEs & FUNCTIONs 
import { ContainerProdutosProps } from '@/types'
import { calculateItemsToShow, ListValues } from '@/lib';
//-- COMPONENTs
//-- TYPEs & FUNCTIONs 
import { ContainerProdutosProps } from '@/types'
import { calculateItemsToShow, ListValues } from '@/lib';
//-- COMPONENTs
import Link from 'next/link';
import Image from 'next/image';
import Produto from './Produto';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//-- ASSETs
import setaCarrossel from '../../public/icons/setaCarrossel.svg';

const calculateItemsToShow = (containerWidth: any) => {
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


interface ContainerProdutosProps {
  className?: string
  tipo?: 'Todos' | 'Ofertas' | 'VejaTambem' | 'VocePodeGostar' | 'VistosRecentemente' | 'OutrosProdutos' | 'ProdutosSimilares'
}
export default function ContainerProdutos({
  className,
  tipo
}: ContainerProdutosProps) {
  const { List } = useFilter()

  switch (tipo) {
    default:
      return (
        <section className={clsx(
          'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-gray-200 overflow-hidden',
        className)}>
          <h3> Produtos </h3>   
          
          <Image className='fixed' src={setaCarrossel} alt='Seta para a esquerda' width={32} height={32} />
          <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>

            {/* { Lista &&
            Lista.slice(0,4).map((item: any) => (
              <li key={item.id}>
                <Produto {...} />
              </li>
            ))} */}


            {/* { Lista &&
            Lista.slice(0,4).map((item: any) => (
              <li key={item.id}>
                <Produto {...} />
              </li>
            ))} */}

            <Produto />
            <Produto />
            <Produto />
            <Produto />


          </ul>
          <Image className='fixed lg:w-[32px] lg:h-[32px]' src={setaCarrossel} alt='icone de seta direita do carrossel' width={24} height={24} />
        </Carousel>
        ) : (
        <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>

          {/* { Lista &&
          Lista.slice(0,4).map((item: any) => (
            <li key={item.id}>
              <Produto {...} />
            </li>
          ))} */}

          <Produto />
          <Produto />
          <Produto />
          <Produto />
            
        </ul>
        )
      }

      <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>
        
      </ul>
          <Image className='fixed lg:w-[32px] lg:h-[32px]' src={setaCarrossel} alt='icone de seta direita do carrossel' width={24} height={24} />
        </Carousel>
        ) : (
        <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>

          {/* { Lista &&
          Lista.slice(0,4).map((item: any) => (
            <li key={item.id}>
              <Produto {...} />
            </li>
          ))} */}

          <Produto />
          <Produto />
          <Produto />
          <Produto />
            
        </ul>
        )
      }

      <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>
        
      </ul>

      <Link className='underline font-black text-[11px]' href='/'> Ver mais </Link>
    </section>
  )
}
      <Link className='underline font-black text-[11px]' href='/'> Ver mais </Link>
    </section>
  )
}