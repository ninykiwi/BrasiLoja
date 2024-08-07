'use client';
import Produto from '@/components/Produto';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ItemsCarousel from '@/components/ItemsCarousel'; 
import { useFilter } from '@/contexts/FilterContexts';
import { titleList } from '@/lib/lists';
import { filterByCategory, filterByName } from '@/services/filters';
import TagFilter from '@/components/TagFilter';
import { getAllProducts } from '@/services/product';


export interface FullPageListProps {
  className?: string;
  title?: any;
  carousel?: boolean;
  category?: string
  produtos?: any[];
}
export default function FullPageList({
  className,
  title,
  carousel = false,
  category,
  produtos,
}: FullPageListProps) {
  const { Name, filterName, Category, filterCategory, MainList } = useFilter()


  if (!MainList) {
    return (
      <section className={clsx('flex flex-col items-center mx-[53px] lg:mx-[230px]', className)}>
        {category ? (
          <h2 className='text-[24px] lg:text-[40px] font-bold'>Nenhum resultado encontrado para {category}.</h2>
        ) : (
          <h2 className='text-[40px] font-bold'>Nenhum resultado encontrado.</h2>
        )}
        <p className='text-[16px] lg:text-[20px]'>Consulte as páginas dos produtos para ver outras opções de compra.</p>
      </section>
    )
  } else {
    const link = typeof title === 'string'
      ? title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-')
      : false;

    return (
      <section className={clsx('w-full px-[5px] flex flex-col items-center', className)}>
        <h2 className='text-[24px] lg:text-[40px] font-bold'>{category}</h2>

        {carousel ? (
          <ItemsCarousel tipo={title} />
        ) : (
          <ul className='flex flex-row flex-wrap justify-between w-full h-max mx-[16px] mt-[12px] gap-[50px] lg:gap-[80px]'>
            { MainList.length > 0 &&
              MainList.map((product, index) => (
                <li key={index}>
                  <Produto id={product.id} name={product.name} imagem={product.mainImg} price={product.price} />
                </li>
            ))}
          </ul>
        )}
  
        <Link
          className='underline font-black text-[11px] lg:text-[16px] mt-[65px] mb-[82px]'
          href={`/listas/${link}`}
        >
          Ver mais
        </Link>
      </section>
    );
  }
}
