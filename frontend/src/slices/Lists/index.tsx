import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import '@/styles/globals.css'
//-- CONTEXTs
import { useFilter } from '@/contexts/FilterContexts';
//-- TYPEs & FUNCTIONs 
import { ContainerProdutosProps } from '@/types/props'
import { CarouselTypes } from '@/types'
//-- COMPONENTs
import Link from 'next/link';
import Image from 'next/image';
import Produto from '@/components/Produto';
import Carousel from "@/components/Carousel";
import clsx from "clsx";
import ItemsCarousel from "@/components/ItemsCarousel";


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
      className="flex flex-col w-full h-auto gap-[16px] px-[16px] py-[16px] lg:px-[53px] lg:py-[53px]"
      style={{ backgroundColor: `${slice.primary.color}` }}  
    >
      <ItemsCarousel tipo={slice.primary.filter} />
          
      <Link className='flex self-end underline font-black text-[11px] lg:text-[16px]' href={`/${slice.primary.filter}`}> Ver mais </Link>

    </section>
  );
};

export default Lists;
