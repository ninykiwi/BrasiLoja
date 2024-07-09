import Produto from '@/components/Produto'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel'
import { useFilter } from '@/contexts/FilterContexts'
import { tagList } from '@/lib/lists'
import { filterByTag } from '@/services/filters'


export interface ListSectionProps {
  className?: string
  title?: any
  carousel?: boolean
  children: React.ReactNode
}
export default function ListSection({
  className,
  title,
  carousel = false,
  children
}: ListSectionProps) {
  const list = tagList.some(tag => tag === title ) ? filterByTag(title) : false

  return (
    <section className={clsx('w-full', className)}>

      <h3> {title} </h3>   

      { carousel ? (
        <Carousel>
          <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>

            {list ? 
              list.map((item: any, index: number) => (
                <li key={index}>
                  <p> {item} </p>
                </li>
              )
            ) : (
              <Produto />
            )}

          </ul>
        </Carousel>
        ) : (
        <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>

          {children}

        </ul>
      )}

      <Link className='underline font-black text-[11px] lg:text-[16px]' href={`/${slice.primary.filter}`}> Ver mais </Link>

    </section>
  )
}
