//-- TYPEs
export type FilterAny = (item: any) => void
export type FilterString = (item: string) => void
export type FilterContextType = {
  Name: string | null
  Tags: any[]
  List: any[] | null
  filterTag: (item: any[]) => void
}


//-- PROPSs
export interface SBNProps {
  name: string
  setList: () => void
}
export interface FBTProps {
  tags: string[]
  setList: () => void
}
export interface ContextProps {

  children: React.ReactNode
}