'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { FilterContextType, ContextProps } from '@/types'
import { searchByName, filterByTag } from '@/services/api'

// Estado inicial
const initialState: FilterContextType = {
  Name: '',
  Tags: [''],
  List: [{}],
  filterName: (item: string) => {},
  filterTags: (item: any) => {},
}

// Criando o contexto
const FilterContext = createContext<FilterContextType>(initialState)

// Criando o provider
export const FilterProvider: React.FC<ContextProps> = ({ children }) => {
  const [Name, setName] = useState('')
  const [Tags, setTags] = useState([''])
  const [List, setList] = useState([{}])

  const filterName = (input: any) => {
    setName(input.target.value)
  }

  const filterTags = (item: any) => {
    if ( !Tags.some(tag => tag === item) ) {
      setTags([...Tags, item])
      filterByTag(Tags, setList)
    }
  }

  useEffect(() => {
    Name !== ''?
    searchByName(Name, setList)
    :
    filterByTag(Tags, setList)
  }, [Name, Tags])

  
  return (
      <FilterContext.Provider value={{ Name, Tags, List, filterName, filterTags }}>
        {children}
      </FilterContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useFilter = () => useContext(FilterContext)