import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import '@/styles/globals.css'
//-- CONTEXTs
import { useFilter } from '@/contexts/FilterContexts';
//-- TYPEs & FUNCTIONs 
import { ContainerProdutosProps } from '@/types/props'
//-- COMPONENTs
import Link from 'next/link';
import Image from 'next/image';
import Produto from '@/components/Produto';
import Carousel from "@/components/Carousel";
import clsx from "clsx";


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
      style={{ backgroundColor: `${slice.primary.color}` }}  
    >
      <div className='flex flex-col w-[calc(100vw - 40px)] h-fit my-[2px] mx-[20px] py-[17px] px-[14px] rounded-[4px]'>
        <h3 className="text-[16px] font-black"> {slice.primary.title} </h3>   

        <ul className='flex w-full mt-[12px] gap-[50px] lg:gap-[80px] justify-evenly'>

            {/* { Lista &&
          Lista.slice(0,4).map((item: any) => (
            <li key={item.id}>
              <Produto {...} />
            </li>
          ))} */}

          <Produto nome='fone de ouvido'  />
          <Produto nome='headphone' />

          <Produto className='hidden lg:flex' />
          <Produto className='hidden lg:flex' />

        </ul>
          
        <Link className='flex self-end underline font-black text-[11px] lg:text-[16px]' href={`/${slice.primary.filter}`}> Ver mais </Link>
      </div>

    </section>
  );
};

export default Lists;
