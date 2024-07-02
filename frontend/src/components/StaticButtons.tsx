import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import searchIcon from '../../public/icons/search.svg'

interface BtnProps {
  className?: string
}

export const Comprar = ({
  className,
  ...restProps
}: BtnProps) => {

  return (
    <button className={clsx('py-[4px] lg:py-[14px] px-[1px] lg:px-[17px] bg-blue-500 rounded lg:rounded-lg text-white font-black', className)} {...restProps}>
      Comprar
    </button>
  )
}

export const AddCarrinho = ({
  className,
  ...restProps
}: BtnProps) => {

  return (
    <button className={clsx('py-[4px] lg:py-[14px] px-[1px] lg:px-[17px] bg-blue-500 rounded lg:rounded-lg text-white font-black', className)} {...restProps}>
      <Image src='../../public/icons/addCart.svg' alt='.' width={22} height={22} />
    </button>
  )
}

export const Pesquisar = ({
  className,
  ...restProps
}: BtnProps) => {
  
  return (
    <button type='submit' className={clsx('py-[6px] lg:py-[11] px-[10px] lg:px-[12px] bg-yellow-500 rounded', className)} {...restProps}> 
      <Image className='lg:w-[32px] lg:h-[32px]' src={searchIcon} alt='Pesquisar produto pelo nome' width={22} height={22} />
    </button>
  )
}