'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { FilterContextType } from '@/types/array'
import { ContextProps } from '@/types/props'
import { filterByName, filterByTag } from '@/services/filters'

const initialState: FilterContextType = {
  Name: '',
  Tags: [''],
  MainList: [{}],
  filterName: (item: string) => {},
  filterTags: (item: any) => {},
}

const FilterContext = createContext<FilterContextType>(initialState)

export const FilterProvider: React.FC<ContextProps> = ({ children }) => {
  const [Name, setName] = useState('')
  const [Tags, setTags] = useState([''])
  const [MainList, setMainList] = useState([{}])

  const filterName = (input: any) => {
    setName(input.target.value)
  }

  const filterTags = (item: any) => {
    if ( !Tags.some(tag => tag === item) ) {
      setTags([...Tags, item])
      filterByTag(Tags, setMainList)
    }
  }

  useEffect(() => {
    Name !== ''?
    filterByName(Name, setMainList)
    :
    filterByTag(Tags, setMainList)
  }, [Name, Tags])

  
  return (
      <FilterContext.Provider value={{ Name, Tags, MainList, filterName, filterTags }}>
        {children}
      </FilterContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useFilter = () => useContext(FilterContext)