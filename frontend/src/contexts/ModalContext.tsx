'use client'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { ModalContextType } from '@/types/array'
import { ContextProps } from '@/types/props'

const initialState: ModalContextType = {

  CreateProductModal: false,
  EditProductModal: false,
  EditListModal: false,
  DepartmentsModal: false,
  UserModal: false,
  toggleCreateProductModal: () => {},
  toggleEditProductModal: () => {},
  toggleEditListModal: () => {},
  toggleDepartmentsModal: () => {},
  toggleUserModal: () => {}
}

const ModalContext = createContext<ModalContextType>(initialState)

export const ModalProvider: React.FC<ContextProps> = ({ children }) => {
  const [CreateProductModal, setCreateProductModal] = useState(false)
  const [EditProductModal, setEditProductModal] = useState(false)
  const [EditListModal, setEditListModal] = useState(false)
  const [DepartmentsModal, setDepartmentsModal] = useState(false)
  const [UserModal, setUserModal] = useState(false)

  const toggleCreateProductModal = () => {
    setCreateProductModal(!CreateProductModal)
  }
  const toggleEditProductModal = () => {
    setEditProductModal(!EditProductModal)
  }
  const toggleEditListModal = () => {
    setEditListModal(!EditListModal)
  }
  const toggleDepartmentsModal = () => {
    setDepartmentsModal(!DepartmentsModal)
  }
  const toggleUserModal = () => {
    setUserModal(!UserModal)
    console.log('working')
  }

  
  return (
      <ModalContext.Provider value={{ CreateProductModal, EditProductModal, EditListModal, DepartmentsModal, UserModal, toggleCreateProductModal, toggleEditProductModal, toggleEditListModal, toggleDepartmentsModal, toggleUserModal }}>
        {children}
      </ModalContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useModal = () => useContext(ModalContext)