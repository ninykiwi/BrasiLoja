'use client'
import React from 'react'
import clsx from 'clsx'
import { useFilter } from '@/contexts/FilterContexts'
import { Pesquisar } from './StaticButtons'


interface SearchBarProps {
  className?: string
  desktop?: boolean
}
export default function SearchBar({
  className,
  desktop = false,
  ...restProps
}: SearchBarProps) {
  const { Name, filterName } = useFilter()

  const inputSetter = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value)
  }

  return (
    <form className={clsx(
      `gap-0`,
      desktop ? 'hidden lg:flex' : 'flex lg:hidden',
    className)} {...restProps}>

      <input className='w-[220px] lg:w-[416px] h-[30px] lg:h-[56px] bg-white rounded text-[1rem]' type='text' onChange={() => filterName} />

      <Pesquisar />

    </form>
  )
}
