"use client";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react';
import CriarProduto from '@/components/CriarProduto';
import ListaEditar from '@/components/ListaEditar';

export default function Home() {
  const [isCriarProdutoVisible, setIsCriarProdutoVisible] = useState(false);
  const [isListaEditarVisible, setIsListaEditarVisible] = useState(false);

  const handleCriarProdutoClick = () => {
    setIsCriarProdutoVisible(true);
  };

  const closeCriarProduto = () => {
    setIsCriarProdutoVisible(false);
  };

  const handleListaEditarClick = () => {
    setIsListaEditarVisible(true);
  };

  const closeListaEditar = () => {
    setIsListaEditarVisible(false);
  };

  return (
    <main>
      <div className='flex w-full justify-center items-center self-center'>
        <ListaEditar isVisible={isListaEditarVisible} onClose={closeListaEditar} />
        <CriarProduto isVisible={isCriarProdutoVisible} onClose={closeCriarProduto} />
      </div>


      <section >
        <div className='flex flex-col gap-[39px] w-[1440px] h-[1576px] items-center'> 

          <div className='gap-[39px] flex flex-row'>       
          <button 
          onClick={handleCriarProdutoClick}
          className='espacamento self-center w-[369px] h-[81px] text-[32px] font-black bg-blue-600 py-[22px] px-[58px] text-white rounded-[10px] cursor-pointer'>
            CRIAR PRODUTO
          </button>
          
          <button 
          onClick={handleListaEditarClick}
          className='espacamento self-center w-[369px] h-[81px] text-[32px] font-black bg-yellow-800 py-[22px] px-[52px] text-black rounded-[10px] cursor-pointer'>
            EDITAR PRODUTO
          </button>
          </div>
        </div>
      </section>

    </main>
  );
}
