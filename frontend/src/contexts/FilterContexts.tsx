'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FilterContextType } from '@/types/array';
import { ContextProps } from '@/types/props';
import { filterByName, filterByCategory, filterByProductName, filterByBrandName } from '@/services/filters';
import { getAllProducts } from '@/services/product';

const initialState: FilterContextType = {
  Name: '',
  ProductName: '',
  BrandName: '',
  Category: '',
  MainList: [],
  filterName: (e: any) => {},
  filterProductName: (e: any) => {},
  filterBrandName: (e: any) => {},
  filterCategory: (item: any) => {},
};

const FilterContext = createContext<FilterContextType>(initialState);

export const FilterProvider: React.FC<ContextProps> = ({ children }) => {
  const [Name, setName] = useState('');
  const [ProductName, setProductName] = useState('');
  const [BrandName, setBrandName] = useState('');
  const [Category, setCategory] = useState<string>('');
  const [MainList, setMainList] = useState<any[]>([]);

  const filterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const filterProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };
  const filterBrandName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrandName(e.target.value);
  };

  const filterCategory = (item: string) => {
    setCategory(item);
    console.log(item)
  };

  useEffect(() => {
    getAllProducts(setMainList)
  }, [])

  useEffect(() => {
    if (Name !== '') {
      console.log(Name)
      filterByName(Name, setMainList)
    } else if (ProductName !== '') {
      console.log(ProductName)
      filterByProductName(ProductName, setMainList)
    } else if (BrandName !== '') {
      console.log(BrandName)
      filterByBrandName(BrandName, setMainList)
    } else if (Category !== '') {
      filterByCategory(Category, setMainList)
    } else {
      getAllProducts(setMainList)
    }
  }, [Name, Category, ProductName, BrandName])

  return (
    <FilterContext.Provider value={{ Name, ProductName, BrandName, Category, MainList, filterName, filterProductName, filterBrandName, filterCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFilter = () => useContext(FilterContext);
