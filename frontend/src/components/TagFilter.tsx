import React from 'react'
import SearchBar from './SearchBar'
import { useFilter } from '@/contexts/FilterContexts'


export default function TagFilter() {
  const { filterTags } = useFilter()

  return (
    <section className='flex w-fit h-fit flex-col gap-[16px]'>
      <SearchProduct />

      <div>
        <h4>Categoria</h4>

        <form>
          <input type='checkbox' name='tag' value='Hardware' />
          <label htmlFor='Hardware'>Hardware</label>

          <input type='checkbox' name='tag' value='Audio' />
          <label htmlFor='Audio'>Audio</label>

          <input type='checkbox' name='tag' value='Games' />
          <label htmlFor='Games'>Games</label>

          <input type='checkbox' name='tag' value='Perifericos' onClick={ () => filterTags(this.value) } />
          <label htmlFor='Perifericos'>Perifericos</label>

          <input type='checkbox' name='tag' value='TV' />
          <label htmlFor='TV'>TV</label>
        </form>
      </div>

      <SearchBrand />
    </section>
  )
}
