
//-- TYPEs
export type FilterAny = (item: any) => void
export type FilterString = (item: string) => void
export type FilterContextType = {
  Name: string | null
  Tags: any[]
  List: any[] | null
  filterName: (item: string) => void
  filterTags: (item: any[]) => void
}


//-- PROPSs
export interface ContextProps {
  children: React.ReactNode
}