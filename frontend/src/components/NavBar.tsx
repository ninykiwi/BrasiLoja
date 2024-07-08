import React from 'react'
import Image from 'next/image'
import { PrismicLink } from '@prismicio/react'
import toggleMenu from '@/public/icons/toggleMenu.svg'
import { settingsCustomType } from '@/services/prismicio'
import { Icons } from './Icons'
import { icon } from '@/lib/icons'
import { useModal } from '@/contexts/ModalContext'

export default async function NavBar() {
  const settings = await settingsCustomType()
  const { toggleDepartmentsModal } = useModal()

  return (
    <nav className='header-nav' style={{backgroundColor: `${settings.data.navbar_color}`}}>

      <Icons src={icon.toggleMenu} width={22} onClick={toggleDepartmentsModal} />

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
