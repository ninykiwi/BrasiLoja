'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFilter } from '@/contexts/FilterContexts';
import Link from 'next/link';
import Image from 'next/image';
import Produto from './Produto';
import setaCarrossel from '../../public/icons/setaCarrossel.svg';

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
            {hero.map((item: any) => (
                <li key={item.id}>
                  <Produto {...} />
                </li>
              ))
            }
            <Produto />
            <Produto />
            <Produto />
            <Produto />
          </ul>

          <Link className='underline font-black text-[11px]' href='/'> Ver mais </Link>
        </section>
      )
    case 'Ofertas':
      return (
        <section className={clsx(
          'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-yellow-500 overflow-hidden',
        className)}>
          <h3> Ofertas e Promoções </h3>   
          
          <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>
            {/* Lista &&
              Lista.slice(0,4).map((item: any) => (
                <li key={item.id}>
                  <Produto {...} />
                </li>
              ))
            */}
            <Produto />
            <Produto />
            <Produto />
            <Produto />
          </ul>

          <Link className='underline font-black text-[11px]' href='/'> Ver mais </Link>
        </section>
      )
    case 'VejaTambem':
      return (
        <section className={clsx(
          'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-green-200 overflow-hidden',
        className)}>
          <h3> Conheça também </h3>   
          
          <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>
            {/* Lista &&
              Lista.slice(0,4).map((item: any) => (
                <li key={item.id}>
                  <Produto {...} />
                </li>
              ))
            */}
            <Produto />
            <Produto />
            <Produto />
            <Produto />
          </ul>

          <Link className='underline font-black text-[11px]' href='/'> Ver mais </Link>
        </section>
      )
      case 'VocePodeGostar':
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
