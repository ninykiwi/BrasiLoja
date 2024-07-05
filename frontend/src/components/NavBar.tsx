import React from 'react'
import Image from 'next/image'
import { PrismicLink } from '@prismicio/react'
import toggleMenu from '../../public/icons/toggleMenu.svg'
import { createClient } from '@/prismicio'
import { settingsCustomType } from '@/services/prismicio'


export default async function NavBar() {
  const settings = await settingsCustomType()

  return (
    <nav className='header-nav' style={{backgroundColor: `${settings.data.navbar_color}`}}>
      <Image src={toggleMenu} alt='menu de departamentos' width={22} height={18} />
      <ul className='flex gap-[14px]'>
        
        {settings.data.navbar.map((item: any, index: number) => (
          <li className='header-nav-list-items' key={index}>
            <PrismicLink field={item.link}>
              {item.name}
            </PrismicLink>
          </li>
        ))}

      </ul>
    </nav>
  )
}
