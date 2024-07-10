import ListSection from '@/containers/ListSection'
import React from 'react'

export default function Produtos() {
  return (
    <main className='flex flex-col mx-[20px] bg-gray-200'>
      <h2 className='text-[18px] font-bold'>Produtos</h2>

      <div className='mt-[37px] mx-[7px]'>
        <button type='submit' className='criar-produto self-start'>
            CRIAR PRODUTO
        </button>
        <br />
        <button type='submit' className='editar-produto mt-[10px] mb-[10px]'>
            EDITAR PRODUTO
        </button>
      </div>


      <ListSection />

    </main>
  )
}
