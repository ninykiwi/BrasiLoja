'use client'
import React from 'react'
import { departmentsList, userOptionsList } from '@/lib/lists'
import Link from 'next/link'
import clsx from 'clsx'
import { useModal } from '@/contexts/ModalContext'
import { icon } from '@/lib/icons'
import { Icons } from './Icons'


export const DepartmentsMenu= () => {
  const { DepartmentsModal, toggleDepartmentsModal } = useModal()

  return (
    <div>
      <Icons src={icon.toggleMenu} width={22} onClick={toggleDepartmentsModal} />

      <ul className={clsx(
        'absolute top-[100px] flex-wrap items-center justify-center max-w-[606px] rounded-r-[20px]',
        DepartmentsModal ? 'flex' : 'hidden',
      )}>
        {departmentsList.map((item, index) => {
          const link = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')

          return (
            <li key={index}>
              <Link className='text-[16px] text-[#5D5D5D]' href={`/departamentos/${link}`}>
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
  const { UserModal, toggleUserModal } = useModal()

  return (
    <div className='w-fit h-fit'>
      <Icons iconStyle='lg:w-[44px] lg:h-[44px]' src={icon.user} width={22} onClick={toggleUserModal} />

      <ul className={clsx(
        'absolute top-[10px] flex-wrap items-center justify-center max-w-[606px] py-[21px] px-[15px] rounded-r-[20px]',
        UserModal ? 'flex' : 'hidden',
      )}>
        {userOptionsList.map((item, index) => {
          const link = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')

          return (
            <li key={index}>
              <Link className='flex items-center justify-center w-[277px] h-[60px] border-2 border-blue-500 rounded-[8px] text-gray-500 hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white' href={`/user/${link}`}>
                {item}
              </Link>
            </li>
          )
        })}

      </ul>
    </div>
  )
}