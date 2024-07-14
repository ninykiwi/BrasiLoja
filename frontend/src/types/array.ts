export interface CartItem {
  id: number,
  name: string,
  price: number,
  mainImg: any,
  [key: string]: any
}

export interface FilterContextType {
  Name: any
  ProductName: any
  BrandName: any
  Category: string
  MainList: any[]
  filterName: (e: any) => void
  filterProductName: (e: any) => void
  filterBrandName: (e: any) => void
  filterCategory: (item: any | any[]) => void
}
export interface UserContextType {
  UserMail: string,
  UserPassword: string,
  CartList: CartItem[],
  LogStatus: boolean,
  authUser: (mail: string, password: string) => void,
  addToCartList: (item: any) => void,
  removeFromCartList: (item: any) => void,
  changeLogStatus: () => void,
};

export interface ModalContextType {
  CreateProductModal: boolean,
  EditProductModal: boolean,
  EditListModal: boolean,
  DepartmentsModal: boolean,
  UserModal: boolean,
  toggleCreateProductModal: () => void,
  toggleEditProductModal: () => void,
  toggleEditListModal: () => void,
  toggleDepartmentsModal: () => void,
  toggleUserModal: () => void
}
