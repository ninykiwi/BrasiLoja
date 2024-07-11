"use client";
import Image from 'next/image'
import frete from '@/public/icons/frete.svg'
import cart from '@/public/icons/cart.svg'
import etapas from '@/public/icons/etapas.svg'
import { ProdutoCarrinho } from '@/components/Produto';
import ItemsCarousel from '@/components/ItemsCarousel';

export default function Cart() {

  return (
    <section className='w-full flex justify-center'>
        <div className="pt-[72px] bg-[#F0EFEF] rounded-[10px] flex flex-col w-[1224px] h-auto">
            <div className="flex flex-col mb-[128px]">
                <div className="flex mb-[67px] mr-[58px] justify-between">
                    <p className='font-bold text-[40px]'>Carrinho de compras</p>
                    <div className='flex flex-col items-end'>
                        <Image
                        src={etapas}
                        alt='etapas'
                        width={648}
                        height={25}
                        className='mt-[12px] mb-[10px] mr-[22px]' />

                        <div className='flex w-[728px] justify-between'>
                            <p className='font-light text-[16px]'>Carrinho de compras</p>
                            <p className='font-light text-[16px]'>Fazer pedido</p>
                            <p className='font-light text-[16px]'>Pagar</p>
                            <p className='font-light text-[16px]'>Finalizar</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[24px]">
                    <div className="flex flex-col">
                        <div className='h-auto gap-[20px]'>
                            <ProdutoCarrinho />
                            <ProdutoCarrinho />
                            <ProdutoCarrinho />
                            <ProdutoCarrinho />
                        </div>

                        <div>
                            <input 
                            type='text' 
                            placeholder='Cupom...'
                            className='font-light text-[16px] py-[16px] pl-[21px] w-[496px] h-[63px] rounded-[10px] pl-[21px] py-[16px]'
                             />
                            <button 
                            type='submit'
                            className='w-[160px] h-[63px] rounded-[10px] text-white bg-blue-500 items-center font-bold text-[20px]'>
                                APLICAR
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[34px]'>
                        <div className='flex flex-col gap-[14px]'>
                            <div className='items-center flex w-[288px] h-[36px] bg-white rounded-[10px] justify-between py-[9px] pl-[25px] pr-[36px]'>
                                <p>Subtotal:</p>
                                <p>VALOR</p>
                            </div>

                            <div className='items-center flex w-[288px] h-[36px] bg-white rounded-[10px] justify-between py-[9px] pl-[25px] pr-[36px]'>
                                <div className='flex gap-[3px]'>
                                    <Image 
                                        src={frete}
                                        alt='frete'
                                        width={17}
                                        height={15}
                                         />
                                    <p>Frete:</p>
                                </div>
                                <p>VALOR</p>
                            </div>

                            <div className='items-center flex w-[288px] h-[36px] bg-white rounded-[10px] justify-between py-[9px] pl-[25px] pr-[36px]'>
                                <p>Total:</p>
                                <p>VALOR</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[17px]'>
                            <button className='bg-blue-500 w-[288] h-[53px] border border-1 rounded-[10px] border-blue-500 text-white font-bold text-[20px] items-center'>
                                IR PARA O PAGAMENTO
                            </button>

                            <button className='bg-white w-[288] h-[53px] border border-1 rounded-[10px] border-blue-500 text-black font-bold text-[20px] items-center'>
                                CONTINUAR COMPRANDO
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ItemsCarousel tipo="OutrosProdutos" />
            <ItemsCarousel tipo="ProdutosSimilares" />
        </div>
    </section>
  );
};

{/*<div className="pt-[72px] bg-[#F0EFEF] rounded-[10px] flex flex-col w-[1224px] h-auto">
    <p className='font-bold text-[40px]'>Carrinho de compras</p>

    <div className='flex flex-col w-full items-center gap-[46px]'>
        <Image 
        src={cart}
        alt='carrinho'
        width={256}
        height={256}
        className='fill-current text-gray-500 opacity-50'
         />

        <p className='font-bold text-[40px]'>Carrinho vazio.</p>

        <button className='bg-blue-500 w-[392] h-[69px] border border-1 rounded-[10px] border-blue-500 text-white font-black text-[20px] items-center'>
            CONTINUAR COMPRANDO
        </button>
    </div>
</div>*/}
