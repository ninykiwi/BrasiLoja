'use client'
import React, { useState } from 'react';
import { departmentsList, userOptionsList } from '@/lib/lists';
import Link from 'next/link';
import clsx from 'clsx';
import { icon } from '@/lib/icons';
import { Icons } from './Icons';
import { useRouter } from 'next/navigation';


export const DepartmentsMenu: React.FC = () => {
  const [DepartmentsModal, setDepartmentsModal] = useState<boolean>(false)
  const toggleDepartmentsModal: () => void = () => {
    setDepartmentsModal(!DepartmentsModal)
  }

  return (
    <div className='flex'>
      <Icons src={icon.toggleMenu} width={22} onClick={toggleDepartmentsModal}/>

      <ul className={clsx(
        'flex z-30 absolute top-[170px] lg:top-[195px] left-[0] flex-col flex-wrap justify-center w-[90%] lg:w-[606px] max-h-[372px] py-[30px] px-[50px] gap-[16px] bg-white rounded-r-[20px] shadow-lg transition-all duration-1000',
        DepartmentsModal === true ? 'opacity-100' : 'opacity-0 collapse',
      )}>
        {departmentsList.map((item, index) => {
          const link = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')

          return (
            <li key={index}>
              <Link className='text-[16px] text-[#5D5D5D] hover:text-blue-500 transition-all duration-500' href={`/departamentos/${link}`}>
                {item}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const UserMenu = () => {
  const [UserModal, setUserModal] = useState<boolean>(false)
  const toggleUserModal: () => void = () => {
    setUserModal(!UserModal)
  }
  const router = useRouter()

  const userModalLinks = (link: string) => {
    if (link === 'Entrar' || link === 'Cadastro') {
      router.push(`/user/${link}`)
    } else {
      return alert('Você deve estar logado para acessar essa página')
    }
  }

  return (
    <div className='w-fit h-fit'>
      <Icons iconStyle='lg:w-[44px] lg:h-[44px]' src={icon.user} width={22} onClick={toggleUserModal} />

      <ul className={clsx(
        'flex z-30 absolute top-[90px] right-[100px] flex-col items-center justify-center max-w-[606px] py-[21px] px-[15px] gap-[4px] bg-white rounded-[20px] shadow-lg transition-all duration-1000',
        UserModal === true ? 'opacity-100' : 'opacity-0 invisible',
      )}>
        {userOptionsList.map((item, index) => {
          const link = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')

          return (
            <li key={index}>
              <button className='flex items-center justify-center w-[277px] h-[60px] border-2 border-blue-500 rounded-[8px] text-gray-500 hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white transition-all duration-500' onClick={() => userModalLinks(link)}>
                {item}
              </button>
            </li>
          )
        })}

      </ul>
    </div>
  )
}