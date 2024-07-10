"use client"
import { useState } from 'react';
import ListaEditar from '@/containers/ListaEditar';
import CriarProduto from '@/containers/CriarProduto';
import EditarProduto from '@/containers/EditarProduto';
import CriarProdutoMob from '@/containers/CriarProdutoMob';


export default function Create() {
  const [CreateProductModal, setCreateProductModal] = useState<boolean>(false)
  const [EditProductModal, setEditProductModal] = useState<boolean>(false)
  const toggleCreateProductModal: () => void = () => {
    setCreateProductModal(!CreateProductModal)
  }
  const toggleEditProductModal = () => {
    setEditProductModal(!EditProductModal)
  }

  return (
    <main>
      <div className='flex w-full justify-center items-center self-center'>
        {CreateProductModal && <CriarProdutoMob />}
        {/* {CreateProductModal && <CriarProduto onClick={toggleCreateProductModal} />} */}
        {EditProductModal && <EditarProduto onClick={toggleEditProductModal} />}
      </div>


      <section >
        <div className='flex flex-col gap-[39px] w-full h-[1576px] items-center'> 

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
