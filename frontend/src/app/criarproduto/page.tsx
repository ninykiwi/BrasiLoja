'use client'
import TagFilter from '@/components/TagFilter'
import CriarProduto from '@/containers/CriarProduto'
import ListaEditar from '@/containers/ListaEditar'
import FullPageList from '@/containers/FullPageList'
import { createProduct, editProduct } from '@/services/product'
import React, { useState } from 'react'
import fone from '../../public/images/fone.png'
import nintendo0 from '../../public/images/nintendo0.png'
import nintendo5 from '../../public/images/nintendo5.png'
import nintendo4 from '../../public/images/nintendo4.png'
import nintendo2 from '../../public/images/nintendo2.png'

export default function Produtos() {
  const [CreateProductModal, setCreateProductModal] = useState<boolean>(false)
  const [EditListModal, setEditListModal] = useState<boolean>(false)

  const toggleCreateProductModal: () => void = () => {
    setCreateProductModal(!CreateProductModal)
  }

  const toggleEditListModal: () => void = () => {
    setEditListModal(!EditListModal)
  }

  const produtos = [
    {
      nome: "Fone de Ouvido",
      imagem:fone,
      preco: "R$ 59,90",
      categoria: "Eletroportáteis",
    },
    {
      nome: "Teclado Mecânico",
      imagem: nintendo0,
      preco: "R$ 250,00",
      categoria: "Eletroportáteis",
    },
    {
      nome: "Camisa Polo",
      imagem: nintendo5,
      preco: "R$ 75,00",
      categoria: "Consoles e Games",
    },
    {
      nome: "Tênis Esportivo",
      imagem: nintendo4,
      preco: "R$ 199,90",
      categoria: "Eletroportáteis",
    },
    {
      nome: "Livro de Programação",
      imagem: nintendo2,
      preco: "R$ 89,90",
      categoria: "Consoles e Games",
    },
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");

  const handleCategoriaSelecionada = (categoria: string) => {
    setCategoriaSelecionada(categoria);
  };

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

      <TagFilter onSelectedCategoria={handleCategoriaSelecionada} />
        
        {categoriaSelecionada && (
          <FullPageList
            title={categoriaSelecionada}
            produtos={produtos}
            className='mt-[30px]'
          />
        )}
      
      </div>
    </section>
  )
}
