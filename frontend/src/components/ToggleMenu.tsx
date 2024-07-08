import React from 'react'
import { departmentsList } from '@/lib/lists'
import Link from 'next/link'
import clsx from 'clsx'
import { useModal } from '@/contexts/ModalContext'


export default function ToggleMenu() {
  const { DepartmentsModal } = useModal()

  return (
    <ul className={clsx(
      'flex-wrap items-center justify-center max-w-[606px] rounded-r-[20px]',
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
  )
}
