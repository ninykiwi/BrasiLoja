'use client'
import Image from 'next/image'
import addCart from '@/public/icons/addCart.svg'
import heart from '@/public/icons/heart.svg'
import fone from '@/public/images/fone.png'
import squareFone from '@/public/images/squareFone.png'
import lixo from '@/public/icons/lixo.svg'
import nintendo from '@/public/images/nintendo0.png'
import EditarProduto from '@/containers/EditarProduto'
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
    <EditarProduto />
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


export function ProdutoCarrinho () {
  
  return (
    <>
    <div className="flex flex-col bg-white w-[912px] h-[226px] rounded-[10px] pt-[20px] pl-[74px] pr-[31px] mb-[34px]">
        <div className="flex w-full items-center justify-end">
            <p className='font-semibold text-[16px]'>Excluir item</p>
            <button className='bg-blue-500 w-[31px] h-[32px] rounded-[4px] py-[6] px-[7px] ml-[2px]'>
                <Image 
                    src={lixo} 
                    alt='excluir produto'
                    width={17}
                    height={20}
                     />
            </button>
        </div>

        <div className="flex items-center h-full">
            <Image 
            src={nintendo} 
            alt='produto'
            width={94}
            height={100}
             />
            <p className='font-black text-[16px] ml-[54px] mr-[64px]'>Console Nintendo Switch Oled 64GB</p>
            <div className="flex flex-col items-center font-semibold text-[16px]">
                <p>Quantidade:</p>
                <input type='number' className='w-[48px] h-[36px]'/>
            </div>
        </div>
    </div>
    </>
  );
};