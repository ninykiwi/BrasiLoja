// 'use client'
// import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
// import { FilterContextType, ContextProps } from '@/types'
// import { searchByName, filterByTag } from '@/services/api'

// // Estado inicial
// const initialState: FilterContextType = {
//   Name: null,
//   Tags: [''],
//   List: [{}],
//   filterTag: (item: any) => {},
// }

// // Criando o contexto
// const FilterContext = createContext<FilterContextType>(initialState)

// // Criando o provider
// export const FilterProvider: React.FC<ContextProps> = ({ children }) => {
//   const [Name, setName] = useState(null)
//   const [Tags, setTags] = useState([''])
//   const [List, setList] = useState([{}])

//   const filterTag = (item: any) => {
//     if ( !Tags.some(tag => tag === item) ) {
//       setTags([...Tags, item])
//       filterByTag(Tags, setList)
//     }
//   }

//   const filterGenero = (e: number) => {
//     setGenero(e)
//   }

//   const filterTitulo = (e: any) => {
//     setTitulo(e.target.value)
//   }

//   useEffect(() => {
//     if (Email != null && Favoritos) {
//       fetchFavorites(Email, setFilmes)
//     } else if (Titulo != '') {
//       fetchMoviesByTitle(Titulo, setFilmes)
//     } else {
//       fetchMoviesByGenre(Genero, Idioma, setFilmes)
//     }
//   }, [Email, Favoritos, Idioma, Genero, Titulo])

//   return (
//       <FilterContext.Provider value={{ Idioma, Genero, Titulo, Filmes, filterIdioma, filterGenero, filterTitulo }}>
//         {children}
//       </FilterContext.Provider>
//   )
// }

// // Hook personalizado para usar o contexto
// export const useFilter = () => useContext(FilterContext)