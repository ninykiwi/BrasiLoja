import Image from 'next/image';
import './produto.css';

export default function Produto () {
  return (
    <div className='flex flex-col w-[235px] h-[381px] py-[12px] px-[16px] rounded-lg bg-white'>
      <Image className='self-end' src='./images/heart.png' alt='Adicionar aos "favoritos"' width={32} height={29}/>
      <div className='flex flex-col justify-between w-full h-full'>
        <Image className='self-center' src='./images/fone.png' alt='Imagem do produto' width={124} height={183} />
        <div className='flex flex-col'>
            <div className='flex flex-col gap-[13px] pb-[13px]'>
                <p className='text-[16px] font-light leading-none'>Fone de ouvido</p>
                <p className='text-[20px] font-black'>R$ 59,90</p>
            </div>
            <div className='flex w-full gap-[15px]'>
                <button className='w-[138px] h-[52px] bg-blue-500 rounded-lg py-[14px] px-[17px] text-white font-black text-[20px]'>COMPRAR</button>
                <button className='w-[50px] h-[46px] bg-yellow-500 rounded-xl py-[5px] px-[7px]'><Image src='./images/addcarrinho.png' alt='Adicionar ao carrinho' width={36} height={36} /></button>
            </div>
        </div>
      </div>
    </div>
  );
};
