import React from 'react'
import { Pesquisar } from './StaticButtons'
import clsx from 'clsx'

interface SearchBarProps {
  className?: string
  desktop?: boolean
}
export default function SearchBar({
  className,
  desktop = false,
  ...restProps
}: SearchBarProps) {

  return (
    <form className={clsx(
      `gap-0`,
      desktop ? 'hidden lg:flex' : 'flex lg:hidden',
      className)} {...restProps}>
      <input type='text' className='w-[220px] lg:w-[416px] h-[30px] lg:h-[56px] bg-white rounded text-[1rem]' />
      <Pesquisar />
    </form>
  )
}
