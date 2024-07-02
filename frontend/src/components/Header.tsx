import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo.png'
import homeIcon from '../../public/icons/home.png'
import userIcon from '../../public/icons/user.png'
import { Comprar, AddCarrinho } from './StaticButtons'
import cartIcon from '../../public/icons/cart.svg'
import chatIcon from '../../public/icons/chat.png'
import toggleMenu from '../../public/icons/toggleMenu.svg'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <section>
      <div className='flex flex-col py-[22px] lg:pt-[34px] lg:pb-[52px] px-[26px] lg:px-[115px] gap-[16px] bg-gray-700'>
        <div className='flex justify-between'>
          <div className='w-fit'>
            <Image src={logo} alt='.' width={115} height={35} />
            <p className='text-white text-[8px] lg:text-[13px]'>www.brasiloja.com.br</p>
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
              <Link href='/'>
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

      <nav className='flex w-full py-[13px] lg:py-[16px] px-[26px] lg:px-[140px] gap-[21px] gap-[54px] bg-gray-400 overflow-hidden'>
        <Image src={toggleMenu} alt='menu de departamentos' width={22} height={18} />
        <ul className='flex gap-[14px]'>
          <li><Link className='header-nav' href='/departamentos'> Departamentos </Link></li>
          <li><Link className='header-nav' href='/produtos'> Produtos </Link></li>
          <li><Link className='header-nav' href='/novidades'> Novidades </Link></li>
          <li><Link className='header-nav' href='/importados'> Importados </Link></li>
          <li><Link className='header-nav' href='/promocoes'> Promoções </Link></li>
        </ul>
      </nav>
    </section>
  )
}
