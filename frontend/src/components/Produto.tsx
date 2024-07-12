'use client'
import Image from 'next/image'
import squareFone from '@/public/images/squareFone.png'
import lixo from '@/public/icons/lixo.svg'
import nintendo from '@/public/images/nintendo0.png'
import EditarProduto from '@/containers/EditarProduto'
import { useState } from 'react'
import { icon } from '@/lib/icons'
import { Icons } from './Icons'
import clsx from 'clsx'

interface ProdutoProps {
  nome: string;
  imagem: string;
  preco: string;
  className?: string;
}

export default function Produto({ nome, imagem, preco, className }: ProdutoProps) {
  return (
    <div className={clsx('card', className)}>
      <Icons className='self-end' iconStyle='lg:w-[32px] lg:h-[32px]' src={icon.heart} width={14}/>
      <div className='flex flex-col justify-between w-full h-full'>
        <Image className='self-center lg:w-[124px] lg:h-[183px]' src={imagem} alt='Imagem do produto' width={70} height={70} />

        <div className='flex flex-col gap-[10px]'>
            <div className='flex flex-col gap-[8px]'>
                <p className='font-display'>{nome}</p>
                <p className='subtitle font-display'>R$ {preco}</p>
            </div>


            <div className='flex justify-center w-full gap-[7px] lg:gap-[15px]'>
                <button className='flex items-center justify-center w-[60px] lg:w-[138px] h-[28px] lg:h-[52px] rounded-[4px] lg:rounded-[8px] bg-blue-500 text-[11px] lg:font-display lg:text-[20px] font-black text-white leading-[-0.2em] hover:bg-blue-700 transition-all duration-500'>COMPRAR</button>
                <Icons className='flex items-center justify-center w-[28px] lg:w-[52px] h-[28px] lg:h-[52px] bg-yellow-500 rounded-[4px] lg:rounded-[10px] hover:bg-yellow-700 transition-all duration-500' iconStyle='lg:w-[36px] lg:h-[36px]' src={icon.addCart} width={17} />
            </div>
        </div>
      </div>
    </div>
  );
};

export const ProdutoHorizontal = ({ nome, imagem, preco, className }: ProdutoProps) => {

  const [isEditarProdutoVisible, setIsEditarProdutoVisible] = useState(false);
   
  const handleEditarProdutoClick = () => {
    setIsEditarProdutoVisible(true);
  };
  const closeEditarProduto = () => {
    setIsEditarProdutoVisible(false);
  };

  return (
    <>
    {isEditarProdutoVisible && <EditarProduto onClick={closeEditarProduto}/>}
    <div className={clsx('flex items-end justify-between w-[1224px] lg:w-[1224px] h-[171px] lg:h-[260px] py-[53px] px-[27px] rounded-lg bg-white border-[#5D5D5D] border', className)}>
      <div className='flex gap-[55px] w-full h-full items-end'>
        <Image className='self-center lg:w-[177px] lg:h-[175px]' src={imagem} alt='Imagem do produto' width={70} height={70} />
        
        <div className='flex flex-col gap-[43px]'>
            <p className='subtitle font-display'>{nome}</p>
            <p className='subtitle font-display'>R$ {preco}</p>
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


export function ProdutoCarrinho ({ nome, imagem, preco, className }: ProdutoProps) {
  
  return (
    <>
    <div className={clsx("flex flex-col bg-white w-[912px] h-[226px] rounded-[10px] pt-[20px] pl-[74px] pr-[31px] mb-[34px]", className)}>
        <div className="flex w-full items-center justify-end">
            <p className='font-semibold text-[16px]'>Excluir item</p>
            <button className='bg-blue-500 w-[31px] h-[32px] rounded-[4px] py-[6] px-[7px] ml-[2px] hover:bg-blue-700 transition-all duration-500'>
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
            src={imagem} 
            alt='produto'
            width={94}
            height={100}
             />

            <p className='font-black text-[16px] ml-[54px] mr-[64px]'>{nome}</p>

            <div className="flex flex-col items-center font-semibold text-[16px] mr-[114px]">
                <p>Quantidade:</p>
                <input type='number' className='w-[48px] h-[36px] p-[10px] border-[1px] rounded-[4px]' min={0}/>
            </div>

            <div className="flex flex-col font-semibold text-[16px] gap-[8px]">
                <p>Preço:</p>
                <p className='font-black'>R$ {preco}</p>
            </div>
        </div>
    </div>
    </>
  );
};