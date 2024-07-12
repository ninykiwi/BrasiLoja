import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { PrismicLink } from '@prismicio/react'
import toggleMenu from '@/public/icons/toggleMenu.svg'
import { fetchDataPrismic, PrismicResponse } from '@/services/prismicio'
import { createClient } from '@/prismicio'
import { DepartmentsMenu } from './ToggleMenus'


interface HomePageProps {
  data: PrismicResponse | null;
  error: string | null;
}


export interface NavBarProps {
  settings: any
}
export default async function NavBar() {
  const client = createClient()
  const settings = await client.getSingle('settings')

  // useEffect(() => {
  //   const fetchPrismicData = () => {
  //     const client = createClient()
  //     client.getSingle('settings')
  //       .then((response) => {
  //         console.log(response)
  //         setPrismicData(response)
  //       })
  //       .catch((error) => {
  //         console.error('Erro ao tentar obter custom type "settings" do prismic: ', error)
  //       })
  //   }

  //   fetchPrismicData()
  // }, [])

  return (
    <nav className='header-nav' style={{ backgroundColor: `${settings.data.navbar_color}`}}>

      <DepartmentsMenu />

      <ul className='flex gap-[14px] overflow-auto'>
        
        {settings.data.navbar.map((item: any, index: number) => (
          <li key={index}>
            <PrismicLink className='header-nav-list-items transition-all duration-500' field={item.link}>
              {item.name}
            </PrismicLink>
          </li>
        ))}

      </ul>
    </nav>
  )
}