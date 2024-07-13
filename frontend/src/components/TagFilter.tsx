'use client'
import React from 'react';
import { SearchProduct, SearchBrand } from '@/components/SearchBar';
import { useFilter } from '@/contexts/FilterContexts';
import { departmentsList } from '@/lib/lists';
import checked from '@/public/icons/checked.svg'
import Image from 'next/image';


export interface TagFilterProps {
  onSelectedCategoria: (categoria: string) => void; // Função callback para notificar quando uma categoria é selecionada
}

export default function TagFilter({ onSelectedCategoria }: TagFilterProps) {
  const { filterCategory } = useFilter();

  return (
    <section className='flex w-fit h-fit flex-col mx-[6px] gap-[16px]'>
      <h3 className='text-[16px] font-bold'> Filtro </h3> 

      <SearchProduct />

      <form className='flex flex-col w-fit h-[197px] py-[5px] px-[10px] bg-white rounded-[10px] shadow-lg overflow-auto'>
        <legend className='text-[16px] font-semibold text-[#3C3B3B]'>Categoria</legend>
        
        <fieldset className='flex flex-col mt-[27px] px-[30px] gap-[10px]'>
          {departmentsList &&
            departmentsList.map((item, index) => {
              const itemFilter = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-');

              return (
                <div className='flex gap-[7px]' key={index}>
                  <fieldset>
                    <input
                      id={`${itemFilter}`}
                      className='appearance-none forced-colors:appearance-auto w-[20px] h-[20px] rounded-[4px] border-[1px] border-gray-700/50 shadow-lg hover:cursor-pointer checked:bg-blue-500 checked:border-blue-500'
                      type='radio'
                      name='department'
                      value={`${itemFilter}`}
                      onClick={() => filterCategory(itemFilter)} // Chama a função handleCategoriaSelecionada com o nome do departamento
                    />
                  </fieldset>
                  <label className='text-[12px] font-normal text-[#3B3B3B]' htmlFor={`${itemFilter}`}>
                    {item}
                  </label>
                </div>
              );
            })}
        </fieldset>
      </form>

      <SearchBrand /> {/* Presumo que aqui você tenha os componentes de marcas */}
    </section>
  );
}