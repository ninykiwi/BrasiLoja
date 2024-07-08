import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from 'clsx'
//-- CONTEXTs
import { useFilter } from '@/contexts/FilterContexts';
//-- TYPEs & FUNCTIONs 
import { ContainerProdutosProps } from '@/types/props'
//-- COMPONENTs
import Link from 'next/link';
import Image from 'next/image';
import Produto from '@/components/Produto';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//-- ASSETs
import setaCarrossel from '@/public/icons/setaCarrossel.svg'


/**
 * Props for `Lists`.
 */
export type ListsProps = SliceComponentProps<Content.ListsSlice>;

/**
 * Component for "Lists" Slices.
 */
const Lists = ({ slice }: ListsProps): JSX.Element => {


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='w-full'
    >

      <h3> {slice.primary.title} </h3>   

      { 2===2 ? (
        <> 
          <Image className='fixed lg:w-[32px] lg:h-[32px]' src={setaCarrossel} alt='icone de seta esquerda do carrossel' width={24} height={24} />
          <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>

              {/* { Lista &&
            Lista.slice(0,4).map((item: any) => (
              <li key={item.id}>
                <Produto {...} />
              </li>
            ))} */}

            <Produto nome='fone de ouvido'  />
            <Produto nome='headphone' />
            <Produto nome='ascoltatore' />
            <Produto nome='tototo' />

          </ul>
          <Image className='fixed lg:w-[32px] lg:h-[32px]' src={setaCarrossel} alt='icone de seta direita do carrossel' width={24} height={24} />
        </>
        ) : (
        <ul className='flex mt-[12px] gap-[50px] lg:gap-[80px]'>

          {/* { Lista &&
          Lista.slice(0,4).map((item: any) => (
            <li key={item.id}>
              <Produto {...} />
            </li>
          ))} */}

          <Produto />
          <Produto />
          <Produto />
          <Produto />

        </ul>
      )}

      <Link className='underline font-black text-[11px] lg:text-[16px]' href={`/${slice.primary.filter}`}> Ver mais </Link>

    </section>
  );
};

export default Lists;
