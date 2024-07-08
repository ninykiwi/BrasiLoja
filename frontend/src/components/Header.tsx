import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.png'
import homeIcon from '@/public/icons/home.svg'
import userIcon from '@/public/icons/user.svg'
import { Comprar, AddCarrinho } from './StaticButtons'
import cartIcon from '@/public/icons/cart.svg'
import chatIcon from '@/public/icons/chat.svg'
import { SearchBar } from './SearchBar'
import { createClient } from '@/prismicio'
import { PrismicImage, PrismicLink } from '@prismicio/react'
import NavBar from './NavBar'
import { settingsCustomType } from '@/services/prismicio'
import { Icons } from './Icons'
import { icon } from '@/lib/icons'
import { redirect } from 'next/navigation'
import ToggleMenu from './ToggleMenu'


export default async function Header() {
  const settings = await settingsCustomType()

  return (
    <section>
      <div className='header'>
        <div className='flex content-baseline justify-between'>
          <Link className='flex flex-col w-fit text-white text-center text-[8px] lg:text-[13px]' href="/">
            <PrismicImage className='lg:w-[175px] lg:h-[33px]' field={settings.data.site_logo} width={99} height={18} />
            {settings.data.site_address} 
          </Link>

          <SearchBar desktop />

          <nav> <ul className='flex w-fit gap-[18px]'>
            <li>
              <Icons iconStyle='lg:w-[40px] lg:h-[40px]' src={icon.home} width={22} href='/' />
            </li>

            <li>
              <Icons iconStyle='lg:w-[40px] lg:h-[40px]' src={icon.user} width={22} href='/' />
            </li>

            <li>
              <Icons iconStyle='lg:w-[40px] lg:h-[40px]' src={icon.cart} width={22} href='/' />
            </li>

            <li>
              <Icons iconStyle='lg:w-[40px] lg:h-[40px]' src={icon.chat} width={22} href='/' />
            </li>
          </ul> </nav>
        </div>

        <SearchBar />
      </div>

      <NavBar />

      <ToggleMenu />

    </section>
  )
}
