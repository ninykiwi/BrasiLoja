'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { FilterContextType, ContextProps } from '@/types'
import { searchByName, filterByTag } from '@/services/api'

// Estado inicial
const initialState: FilterContextType = {
  Name: null,
  Tags: [''],
  List: [{}],
  filterTags: (item: any) => {},
}

// Criando o contexto
const FilterContext = createContext<FilterContextType>(initialState)

// Criando o provider
export const FilterProvider: React.FC<ContextProps> = ({ children }) => {
  const [Name, setName] = useState(null)
  const [Tags, setTags] = useState([''])
  const [List, setList] = useState([{}])

  const filterTags = (item: any) => {
    if ( !Tags.some(tag => tag === item) ) {
      setTags([...Tags, item])
      filterByTag(Tags, setList)
    }
  }

  return (
      <FilterContext.Provider value={{ Name, Tags, List, filterTags }}>
        {children}
      </FilterContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useFilter = () => useContext(FilterContext)