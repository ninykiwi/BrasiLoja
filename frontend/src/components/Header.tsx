import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo.png'
import homeIcon from '../../public/icons/home.svg'
import userIcon from '../../public/icons/user.svg'
import { Comprar, AddCarrinho } from './StaticButtons'
import cartIcon from '../../public/icons/cart.svg'
import chatIcon from '../../public/icons/chat.svg'
import SearchBar from './SearchBar'
import { createClient } from '@/prismicio'
import { PrismicImage, PrismicLink } from '@prismicio/react'
import NavBar from './NavBar'
import { settingsCustomType } from '@/services/prismicio'


export default async function Header() {
  const settings = await settingsCustomType()

  return (
    <section>
      <div className='header'>
        <div className='flex items-baseline justify-between'>
          <div className='flex flex-col w-fit items-center'>
            <PrismicImage className='lg:w-[175px] lg:h-[33px]' field={settings.data.site_logo} width={99} height={18} />
            <Link className='text-white text-[8px] lg:text-[13px]' href={`${settings.data.site_address}`}> {settings.data.site_address} </Link>
          </div>

          <SearchBar desktop />

          <nav> <ul className='flex w-fit gap-[18px]'>
            <li>
              <Link href='/'>
                <Image src={homeIcon} alt='icone de "início"' width={22} height={22} />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <Image src={userIcon} alt='icone de "usuário"' width={22} height={22} />
              </Link>
            </li>
            <li>
              <Link href='/carrinho'>
                <Image src={cartIcon} alt='icone de "carrinho"' width={22} height={22} />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <Image src={chatIcon} alt='icone de "chat"' width={22} height={22} />
              </Link>
            </li>
          </ul> </nav>
        </div>

        <SearchBar />
      </div>

      <NavBar />

    </section>
  )
}
