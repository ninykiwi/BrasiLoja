import React from 'react'
import TagFilter from '@/components/TagFilter'

export default function ListProducts() {
  return (
    <div className='flex flex-col mx-[20px]'>
      <h2>Produtos</h2>

      <div>
        <h3>Filtros</h3>

        <TagFilter />
      </div>
    </div>
  )
}
