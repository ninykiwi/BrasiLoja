"use client"
import { useState } from 'react';
import ListaEditar from '@/containers/ListaEditar';
import CriarProduto from '@/containers/CriarProduto';
import { useModal } from '@/contexts/ModalContext';


export default function Create() {
  const { toggleCreateProductModal, toggleEditProductModal, toggleEditListModal } = useModal();

  return (
    <main>
      <div className='flex w-full justify-center items-center self-center'>
        <ListaEditar />
        <CriarProduto />
      </div>


      <section >
        <div className='flex flex-col gap-[39px] w-[1440px] h-[1576px] items-center'> 

          <div className='gap-[39px] flex flex-row'>       
          <button 
          onClick={toggleCreateProductModal}
          className='criar-produto'>
            CRIAR PRODUTO
          </button>
          
          <button 
          onClick={toggleEditProductModal}
          className='editar-produto bg-yellow-800'>
            EDITAR PRODUTO
          </button>
          </div>
        </div>
      </section>

    </main>
  );
}
