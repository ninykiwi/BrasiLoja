import React from 'react'
import { SearchProduct, SearchBrand } from '@/components/SearchBar'
import { useFilter } from '@/contexts/FilterContexts'
import { departmentsList } from '@/lib/lists'


export default function TagFilter() {
  const { filterTags } = useFilter()

  return (
    <section className='flex w-fit h-fit flex-col gap-[16px]'>
      <SearchProduct />

      <div>
        <h4>Categoria</h4>

        <form className='p-[4px] border-2 border-black rounded'>
          <fieldset>
            {departmentsList &&
              departmentsList.map((item, index) => {
                const itemFilter = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')

                return (
                  <div className='flex gap-2' key={index}>
                    <input id={`${itemFilter}`} type='checkbox' name='department' value={`${itemFilter}`} onClick={() => filterTags(`${itemFilter}`)} />

                    <label htmlFor={`${itemFilter}`}>
                      {item}
                    </label>
                  </div>
                )
            })}
          </fieldset>
          <input type='checkbox' name='tag' value='Hardware' />
          <label htmlFor='Hardware'>Hardware</label>

          <input type='checkbox' name='tag' value='Audio' />
          <label htmlFor='Audio'>Audio</label>

          <input type='checkbox' name='tag' value='Games' />
          <label htmlFor='Games'>Games</label>

          <input type='checkbox' name='tag' value='Perifericos' />
          <label htmlFor='Perifericos'>Perifericos</label>

          <input type='checkbox' name='tag' value='TV' />
          <label htmlFor='TV'>TV</label>
        </form>
      </div>

      <SearchBrand />
    </section>
  )
}
