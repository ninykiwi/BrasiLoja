'use client'
import Image from 'next/image'
import addCart from '../../public/icons/addCart.svg'
import heart from '../../public/icons/heart.svg'
import fone from '../../public/images/fone.png'
import squareFone from '../../public/images/squareFone.png'
import EditarProduto from './EditarProduto'
import { useState } from 'react'


export default function Produto ({ nome }: any) {
  return (
    <div className='card'>
      <Image className='self-end' src={heart} alt='Adicionar aos "favoritos"' width={32} height={29}/>
      <div className='flex flex-col justify-between w-full h-full'>
        <Image className='self-center lg:w-[124px] lg:h-[183px]' src={fone} alt='Imagem do produto' width={70} height={70} />
        <div className='flex flex-col'>
            <div className='flex flex-col gap-[13px] pb-[13px]'>
                <p className='font-display'>{nome}</p>
                <p className='subtitle font-display'>R$ 59,90</p>
            </div>
            <div className='flex w-full gap-[15px]'>
                <button className='comprar'>COMPRAR</button>
                <button className='add-cart'><Image src={addCart} alt='Adicionar ao carrinho' width={36} height={36} /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export function ProdutoHorizontal () {
  const [isEditarProdutoVisible, setIsEditarProdutoVisible] = useState(false);
   
  const handleEditarProdutoClick = () => {
    setIsEditarProdutoVisible(true);
  };
  const closeEditarProduto = () => {
    setIsEditarProdutoVisible(false);
  };

  return (
    <>
    <EditarProduto isVisible={isEditarProdutoVisible} onClose={closeEditarProduto}/>
    <div className='flex items-end justify-between w-[1224px] lg:w-[1224px] h-[171px] lg:h-[260px] py-[53px] px-[27px] rounded-lg bg-white border-[#5D5D5D] border'>
      <div className='flex gap-[55px] w-full h-full items-end'>
        <Image className='self-center lg:w-[177px] lg:h-[175px]' src={squareFone} alt='Imagem do produto' width={70} height={70} />
        
        <div className='flex flex-col gap-[43px]'>
            <p className='subtitle font-display'>Fone de ouvido</p>
            <p className='subtitle font-display'>R$ 59,90</p>
        </div>
      </div> 

        <button 
        onClick={handleEditarProdutoClick}
        className='bg-yellow-800 rounded-[10px] text-[20px] text-black font-black w-[390px] h-[81px] py-[22px] px-[63px]'>
          EDITAR PRODUTO
        </button>  

    </div>
    </>
  );
};
