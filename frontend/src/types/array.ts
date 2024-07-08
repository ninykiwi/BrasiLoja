export interface FilterContextType {
  Name: string | null
  Tags: any[]
  MainList: any[] | null
  filterName: (item: string) => void
  filterTags: (item: any[]) => void
}
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