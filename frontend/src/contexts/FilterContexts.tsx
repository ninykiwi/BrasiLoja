import React, { createContext, useContext, useState } from 'react';
import { FilterContextType } from '@/types/array';
import { ContextProps } from '@/types/props';
import { filterByName, filterByTag } from '@/services/filters';

const initialState: FilterContextType = {
  Name: '',
  Tags: [],
  MainList: [],
  filterName: (item: string) => {},
  filterTags: (item: any) => {},
};

const FilterContext = createContext<FilterContextType>(initialState);

export const FilterProvider: React.FC<ContextProps> = ({ children }) => {
  const [Name, setName] = useState('');
  const [Tags, setTags] = useState<string[]>([]);
  const [MainList, setMainList] = useState<any[]>([]);

  const filterName = (input: any) => {
    setName(input.target.value);
  };

  const filterTags = (item: string) => {
    if (!Tags.includes(item)) {
      const newTags = [...Tags, item];
      setTags(newTags);
      filterByTag(newTags, setMainList); // Chama a função de filtro por tag com a nova lista de tags
    }
  };

  return (
    <FilterContext.Provider value={{ Name, Tags, MainList, filterName, filterTags }}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFilter = () => useContext(FilterContext);
