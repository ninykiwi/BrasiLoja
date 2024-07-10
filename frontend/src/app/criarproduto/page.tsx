'use client'
import TagFilter from '@/components/TagFilter'
import CriarProduto from '@/containers/CriarProduto'
import ListaEditar from '@/containers/ListaEditar'
import ListSection from '@/containers/ListSection'
import { createProduct, editProduct } from '@/services/product'
import React, { useState } from 'react'

export default function Produtos() {
  const [CreateProductModal, setCreateProductModal] = useState<boolean>(false)
  const [EditListModal, setEditListModal] = useState<boolean>(false)

  const toggleCreateProductModal: () => void = () => {
    setCreateProductModal(!CreateProductModal)
  }

  const toggleEditListModal: () => void = () => {
    setEditListModal(!EditListModal)
  }

  return (
    <section className='flex flex-col h-fit gap-[60px]'>
      {CreateProductModal && <CriarProduto onClick={toggleCreateProductModal} />}
      {EditListModal && <ListaEditar onClick={toggleEditListModal} />}

      <section className='flex flex-col lg:flex-row justify-between mt-[38px]'>
        <h2 className='w-fit text-[18px] lg:text-[40px] font-bold'>Produtos</h2>

        <div className='flex flex-col lg:flex-row w-fit lg:gap-[39px]'>
          <button className='criar-produto self-start' onClick={toggleCreateProductModal}>
              CRIAR PRODUTO
          </button>
          <button className='editar-produto mt-[10px] mb-[10px]' onClick={toggleEditListModal}>
              EDITAR PRODUTO
          </button>
        </div>
      </section>

      <div className='flex flex-col lg:flex-row lg:gap-[131px]'>

        <TagFilter />
        
        <ListSection />
      
      </div>
    </section>
  )
}
