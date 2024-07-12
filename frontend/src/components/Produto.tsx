'use client'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'
import EditarProduto from '@/containers/EditarProduto'
import { Icons } from './Icons'
import { useUser } from '@/contexts/UserContext'
import { icon } from '@/lib/icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface ProdutoProps {
  id: number | string;
  nome: string;
  imagem: string | null;
  preco: number;
  className?: string;
}
export default function Produto({ id, nome, imagem, preco, className }: ProdutoProps) {
  const { addToCartList } = useUser()
  const router = useRouter()
  
  const makePriceFloat = (price: number) => {
    return price.toFixed(2)
  }
  const price = parseFloat(makePriceFloat(preco))
  
  const comprar = (id: number | string) => {
    addToCartList(id)
    router.push('/carrinho')
  }

  return (
    <div className={clsx('card', className)}>
      <Icons className='self-end' iconStyle='lg:w-[32px] lg:h-[32px]' src={icon.heart} width={14}/>

      <div className='flex flex-col justify-between w-full h-full'>
        <Link className='flex flex-col justify-between w-full h-full mb-[10px]' href={`/Produtos/${id}`}>
          {imagem !== null ? (
            <Image className='self-center lg:w-[124px] lg:h-[183px]' src={imagem} alt='Imagem do produto' width={70} height={70} />
          ) : (
            <div className='self-center flex flex-col items-center justify-center w-[70px] lg:w-[124px] h-[70px] lg:h-[183px] bg-white border-2 border-gray-200/50 rounded-[4px]'>
              <Icons src={icon.camera} width={23} />
            </div>
          )}

          <div className='flex flex-col gap-[8px]'>
              <p className='font-display'>{nome}</p>
              <p className='subtitle font-display'>R$ {price} </p>
          </div>
        </Link>

        <div className='flex flex-col gap-[10px]'>

            <div className='flex justify-center w-full gap-[7px] lg:gap-[15px]'>
                <button className='flex items-center justify-center w-[60px] lg:w-[138px] h-[28px] lg:h-[52px] rounded-[4px] lg:rounded-[8px] bg-blue-500 text-[11px] lg:font-display lg:text-[20px] font-black text-white leading-[-0.2em] hover:bg-blue-700 transition-all duration-500' onClick={() => comprar(id)}>
                  COMPRAR
                </button>

                <Icons className='flex items-center justify-center w-[28px] lg:w-[52px] h-[28px] lg:h-[52px] bg-yellow-500 rounded-[4px] lg:rounded-[10px] hover:bg-yellow-700 transition-all duration-500' iconStyle='lg:w-[36px] lg:h-[36px]' src={icon.addCart} width={17} onClick={() => addToCartList(id)} />
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

        {imagem !== null ? (
          <Image className='self-center lg:w-[177px] lg:h-[175px]' src={imagem} alt='Imagem do produto' width={70} height={70} />
        ) : (
          <div className='self-center flex flex-col items-center justify-center w-[70px] lg:w-[124px] h-[70px] lg:h-[183px] border-2 border-gray-200/50 rounded-[4px]'>
            <Icons src={icon.camera} width={23} />
          </div>
        )}
        
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


export const ProdutoCarrinho = ({ id, nome, imagem, preco, className }: ProdutoProps) => {
  const { removeFromCartList } = useUser()

  return (
    <div className={clsx("flex flex-col bg-white w-[912px] h-[226px] rounded-[10px] pt-[20px] pl-[74px] pr-[31px] mb-[34px]", className)}>
        <div className="flex w-full items-center justify-end">
            <p className='font-semibold text-[16px]'>Excluir item</p>
            <Icons className='bg-blue-500 w-[31px] h-[32px] rounded-[4px] py-[6] px-[7px] ml-[2px] hover:bg-blue-700 transition-all duration-500' src={icon.lixo} width={17} onClick={() => removeFromCartList(id)} />
        </div>

        <div className="flex items-center h-full">
            {imagem !== null ? (
              <Image src={imagem} alt='produto' width={94} height={100} />
            ) : (
              <div className='self-center flex flex-col items-center justify-center w-[70px] lg:w-[124px] h-[70px] lg:h-[183px] border-2 border-gray-200/50 rounded-[4px]'>
                <Icons src={icon.camera} width={23} />
              </div>
            )}

            <p className='font-black text-[16px] ml-[54px] mr-[64px]'>{nome} </p>

            <div className="flex flex-col items-center font-semibold text-[16px] mr-[114px]">
                <p>Quantidade:</p>
                <input type='number' className='w-[48px] h-[36px] p-[10px] border-[1px] rounded-[4px]' min={0}/>
            </div>

            <div className="flex flex-col font-semibold text-[16px] gap-[8px]">
                <p>Preço:</p>
                <p className='font-black'>R$ {preco} </p>
            </div>
        </div>
    </div>
  );
};