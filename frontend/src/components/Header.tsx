import React from 'react'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { PrismicImage } from '@prismicio/react'
import NavBar from './NavBar'
import { Icons } from './Icons'
import { icon } from '@/lib/icons'
import { UserMenu } from './ToggleMenus'
import { createClient } from '@/prismicio'


export default async function Header() {
  const client = createClient()
  const settings = await client.getSingle('settings')

  return (
    <section>
      <div className='header' style={{ backgroundColor: `${settings.data.header_color}`}}>
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
              <UserMenu />
            </li>

            <li>
              <Icons iconStyle='lg:w-[40px] lg:h-[40px]' src={icon.cart} width={22} href='/carrinho' />
            </li>

            <li>
              <Icons iconStyle='lg:w-[40px] lg:h-[40px]' src={icon.chat} width={22} href='/' />
            </li>
          </ul> </nav>
        </div>

        <SearchBar />
      </div>

      <NavBar />

    </section>
  )
}
