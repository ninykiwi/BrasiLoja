import Image from 'next/image'
import addCart from '../../public/icons/addCart.svg'
import heart from '../../public/icons/heart.svg'
import fone from '../../public/images/fone.png'
import squareFone from '../../public/images/squareFone.png'
import EditarProduto from './EditarProduto'
import { useState } from 'react'


export default function Produto () {
  return (
    <div className='flex flex-col w-[100px] lg:w-[235px] h-[171px] lg:h-[381px] py-[12px] px-[16px] rounded-lg bg-white'>
      <Image className='self-end' src={heart} alt='Adicionar aos "favoritos"' width={32} height={29}/>
      <div className='flex flex-col justify-between w-full h-full'>
        <Image className='self-center lg:w-[124px] lg:h-[183px]' src={fone} alt='Imagem do produto' width={70} height={70} />
        <div className='flex flex-col'>
            <div className='flex flex-col gap-[13px] pb-[13px]'>
                <p className='font-display'>Fone de ouvido</p>
                <p className='subtitle font-display'>R$ 59,90</p>
            </div>
            <div className='flex w-full gap-[15px]'>
                <button className='w-[60px] lg:w-[138px] h-[28px] lg:h-[52px] bg-blue-500 rounded-lg py-[14px] px-[17px] text-white font-black text-[11px] lg:text-[20px]'>COMPRAR</button>
                <button className='w-[50px] h-[46px] bg-yellow-500 rounded-xl py-[5px] px-[7px]'><Image src={addCart} alt='Adicionar ao carrinho' width={36} height={36} /></button>
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
