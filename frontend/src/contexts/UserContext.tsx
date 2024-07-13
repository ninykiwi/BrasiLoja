'use client'
import React, { createContext, useContext, useState } from 'react';
import { UserContextType } from '@/types/array';
import { ContextProps } from '@/types/props';

const initialState: UserContextType = {
  UserMail: '',
  UserPassword: '',
  CartList: [{id: 0, name: '', price: 0, mainImg: null}],
  LogStatus: false,
  authUser: (mail: string, password: string) => {},
  addToCartList: (item: any) => {},
  removeFromCartList: (item: any) => {},
  changeLogStatus: () => {},
};

const UserContext = createContext<UserContextType>(initialState);

export const UserProvider: React.FC<ContextProps> = ({ children }) => {
  const [UserMail, setUserMail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [CartList, setCartList] = useState([{id: 0, name: '', price: 0, mainImg: null}]);
  const [LogStatus, setLogStatus] = useState(false);

  const authUser = (input: any) => {
    if (UserMail !== '' && UserPassword !== '') {
      setUserMail(input.target.value);
    }
  };

  const addToCartList = (item: any) => {
    if (CartList.some(( product: any ) => product.id === item.id)) {
      return alert('Item já existe no carrinho')
    } else {
      const newCartList = [...CartList, item]
      setCartList(newCartList)
      return alert('Item adicionado ao carrinho com sucesso!')
    }
  }

  const removeFromCartList = (item: any) => {
    if (CartList.some(( product: any ) => product.id === item.id)) {
      const newCartList = CartList.filter(( product: any ) => product.id !== item.id)
      setCartList(newCartList)
      return alert('Item removido do carrinho com sucesso!')
    } else {
      return alert('Item não existe no carrinho')
    }
  }

  const changeLogStatus = () => {
    setLogStatus(!LogStatus)
  }

  return (
    <UserContext.Provider value={{ UserMail, UserPassword, CartList, LogStatus, addToCartList, removeFromCartList, authUser, changeLogStatus }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useUser = () => useContext(UserContext);