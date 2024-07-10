'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import { useFilter } from '@/contexts/FilterContexts'
import { Pesquisar } from './StaticButtons'
import { Icons } from './Icons'
import { icon } from '@/lib/icons'

interface SearchBarProps {
  className?: string
  desktop?: boolean
}


export const SearchBar = ({
  className,
  desktop = false,
  ...restProps
}: SearchBarProps) => {
  const { Name, filterName } = useFilter()
  const [input, setInput] = useState<string>('')

  const inputSetter = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value)
  }

  return (
    <form className={clsx(
      `gap-0`,
      desktop ? 'hidden lg:flex' : 'flex lg:hidden',
    className)} {...restProps}>

      <input className='w-[220px] lg:w-[416px] h-[30px] lg:h-[44px] bg-white rounded-[6px] lg:rounded-r-[0] lg:rounded-l-[10px] text-[1rem]' type='text' onChange={() => filterName} />

      <Icons className='flex items-center justify-center w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] bg-yellow-500 rounded-[6px] lg:rounded-l-[0] lg:rounded-r-[10px]' iconStyle='lg:w-[24px] lg:h-[24px]' src={icon.search} width={16} />
    </form>
  )
}

export const SearchProduct = () => {
  return (
    <form className='flex justify-between w-full h-[32px] -py-[9px] px-[12px] bg-white shadow-lg rounded-[10px]'>
      <input type='text' placeholder='Produto...' />
      <Icons src={icon.search} width={16} />
    </form>
  )
}

export const SearchBrand = () => {
  return (
    <form className='flex justify-between w-full h-[32px] -py-[9px] px-[12px] bg-white shadow-lg rounded-[10px]'>
      <input type='text' placeholder='Marca...' />
      <Icons src={icon.search} width={16} />
    </form>
  )
}