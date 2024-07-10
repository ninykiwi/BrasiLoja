'use client'
import Produto from '@/components/Produto'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel'
import { useFilter } from '@/contexts/FilterContexts'
import { tagList } from '@/lib/lists'
import { filterByTag } from '@/services/filters'
import TagFilter from '@/components/TagFilter'


export interface ListSectionProps {
  className?: string
  title?: any
  carousel?: boolean
  children?: React.ReactNode
}
export default function ListSection({
  className,
  title,
  carousel = false,
  children
}: ListSectionProps) {
  const list = tagList.some(tag => tag === title ) ? filterByTag(title) : false
  const link = typeof title === 'string' ? title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-') : false

  return (
    <section className={clsx('w-full', className)}>

      <h3 className='text-[16px] font-bold'> Filtro </h3>   

      <TagFilter />

      { carousel ? (
        <Carousel>
          <ul className='flex flex-wrap w-full mt-[12px] gap-[50px] lg:gap-[80px]'>

            {/* {list ? 
              list.map((item: any, index: number) => (
                <li key={index}>
                  <p> {item} </p>
                </li>
              )
            ) : (
              <Produto />
            )} */}

            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />

          </ul>
        </Carousel>
        ) : (
        <ul className='flex flex-wrap mx-[16px] mt-[12px] gap-[50px] lg:gap-[80px]'>

          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />

        </ul>
      )}

      <Link className='underline font-black text-[11px] lg:text-[16px]' href={`/listas/${link}`}> Ver mais </Link>

    </section>
  )
}
