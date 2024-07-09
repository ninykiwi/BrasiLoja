import { ListTypes } from '@/types'

export interface ContextProps {
  children: React.ReactNode
}
export interface ListValuesProps {
  tipo?: ListTypes
  carousel: boolean
}
export interface ContainerProdutosProps {
  className?: string
  tipo?: ListTypes
}