'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
//-- PRISMIC
import { createClient } from '@/prismicio';
import { components } from '@/slices'
//-- CONTEXTs
import { useFilter } from '@/contexts/FilterContexts';
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

export default function ContainerProdutos({
  className,
  tipo
}: ContainerProdutosProps) {
  const listValues = ListValues(tipo)
  const { List } = useFilter()

  const client = createClient()
  const page = client.getSingle('home')

  return (
    <section className={clsx(
      'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] overflow-hidden',
      tipo === 'Ofertas' && 'bg-yellow-500',
      tipo === 'VejaTambem' && 'bg-green-200',
      tipo === 'VocePodeGostar' && 'bg-blue-200',
      tipo === 'VistosRecentemente' && 'bg-yellow-500',
      tipo === 'OutrosProdutos' && 'bg-gray-500',
      tipo === 'ProdutosSimilares' && 'bg-gray-500',
    className)}>
      <h3> {listValues.Title} </h3>   
      
      { Carousel ? (
        <Carousel responsive={responsive} autoPlay={true} infinite={true}> 
          <Image className='fixed lg:w-[32px] lg:h-[32px]' src={setaCarrossel} alt='icone de seta esquerda do carrossel' width={24} height={24} />
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