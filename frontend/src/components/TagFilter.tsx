import React from 'react';
import { SearchProduct, SearchBrand } from '@/components/SearchBar';
import { useFilter } from '@/contexts/FilterContexts';
import { departmentsList } from '@/lib/lists';

export interface TagFilterProps {
  onSelectedCategoria: (categoria: string) => void; // Função callback para notificar quando uma categoria é selecionada
}

export default function TagFilter({ onSelectedCategoria }: TagFilterProps) {
  const { filterTags } = useFilter();

  const handleCategoriaSelecionada = (categoria: string) => {
    filterTags(categoria); // Chamada para filtrar produtos com base na categoria selecionada
    onSelectedCategoria(categoria); // Notifica o componente pai sobre a categoria selecionada
  };

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
                  <input
                    id={`${itemFilter}`}
                    className='appearance-none w-[20px] h-[20px] rounded-[4px] border-[1px] border-black'
                    type='checkbox'
                    name='department'
                    value={`${itemFilter}`}
                    onClick={() => handleCategoriaSelecionada(item)} // Chama a função handleCategoriaSelecionada com o nome do departamento
                  />
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