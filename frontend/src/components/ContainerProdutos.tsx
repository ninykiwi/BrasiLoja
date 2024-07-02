'use client'
import React from 'react'
import clsx from 'clsx'
import { useFilter } from '@/contexts/FilterContexts'
import Link from 'next/link'
import Image from 'next/image'
import Produto from './Produto'
import setaCarrossel from '../../public/icons/setaCarrossel.svg'


interface ContainerProdutosProps {
  className?: string
  tipo?: 'Todos' | 'Ofertas' | 'VejaTambem' | 'VocePodeGostar'
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
          'flex flex-col mx-[20px] lg:mx-[108px] px-[14px] py-[17px] gap-[14px] bg-blue-200 overflow-hidden',
        className)}>
          <h3> Você pode gostar </h3>   
          
          <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>
            {/* Lista &&
              Lista.map((item: any) => (
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

        </section>
      )
  }
}
