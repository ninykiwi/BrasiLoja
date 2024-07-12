"use client";
import Image from 'next/image'
import frete from '@/public/icons/frete.svg'
import cart from '@/public/icons/cart.svg'
import etapas from '@/public/icons/etapas.svg'
import { ProdutoCarrinho } from '@/components/Produto';
import ItemsCarousel from '@/components/ItemsCarousel';
import { useUser } from '@/contexts/UserContext';
import Link from 'next/link';


export default function Cart() {
  const { CartList } = useUser()
  const cartTotal = CartList.reduce((sum, product) => sum + product.price, 0);
  const subTotal = cartTotal ? cartTotal : '0.00'
  const valorFrete = parseFloat((Math.random() * (51.50 - 5.15) + 5.15).toFixed(2))
  const total = typeof subTotal === 'number' ? (subTotal + valorFrete) : '0.00'

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
                          { CartList.length > 1 ? 
                          CartList.map((product) => (
                            <ProdutoCarrinho key={product.id && product.id} id={product.id} nome={product.name} preco={product.price} imagem={product.mainImg} />
                          )) : (
                            <div className="flex flex-col items-center justify-center bg-white w-[912px] h-[226px] rounded-[10px] pt-[20px] pl-[74px] pr-[31px] mb-[34px]">
                              <h2>Não há itens no carinho</h2>
                            </div>
                          )}
                        </div>

                        <div>
                            <input 
                            type='text' 
                            placeholder='Cupom...'
                            className='font-light text-[16px] py-[16px] pl-[21px] w-[496px] h-[63px] rounded-[10px] pl-[21px] py-[16px]'
                             />
                            <button 
                            type='submit'
                            className='w-[160px] h-[63px] rounded-[10px] text-white bg-blue-500 items-center font-bold text-[20px] hover:bg-blue-700 transition-all duration-500'>
                                APLICAR
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[34px]'>
                        <div className='flex flex-col gap-[14px]'>
                            <div className='items-center flex w-[288px] h-[36px] bg-white rounded-[10px] justify-between py-[9px] pl-[25px] pr-[36px]'>
                                <p>Subtotal:</p>
                                <p> {subTotal} </p>
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
                                <p> {valorFrete} </p>
                            </div>

                            <div className='items-center flex w-[288px] h-[36px] bg-white rounded-[10px] justify-between py-[9px] pl-[25px] pr-[36px]'>
                                <p>Total:</p>
                                <p> {total} </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[17px]'>
                            <button className='bg-blue-500 w-[288] h-[53px] border border-1 rounded-[10px] border-blue-500 text-white font-bold text-[20px] items-center hover:bg-blue-700 transition-all duration-500'>
                                IR PARA O PAGAMENTO
                            </button>

                            <Link className='flex items-center justify-center bg-white w-[288] h-[53px] border border-1 rounded-[10px] border-blue-500 text-black font-bold text-[20px] items-center hover:bg-gray-200 transition-all duration-500' href='/Produtos'>
                                CONTINUAR COMPRANDO
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <ItemsCarousel tipo="OutrosProdutos" />
            <ItemsCarousel tipo="VistosRecentemente" />
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
