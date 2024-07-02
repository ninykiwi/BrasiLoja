'use client'
import React from 'react'
import clsx from 'clsx'
import { useFilter } from '@/contexts/FilterContexts'
import Link from 'next/link'
import Image from 'next/image'
import Produto from './Produto'
import setaCarrossel from '../../public/icons/setaCarrossel.svg'
import { createClient } from '@/prismicio'


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