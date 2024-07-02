
//-- TYPEs
export type FilterAny = (item: any) => void
export type FilterString = (item: string) => void
export type FilterContextType = {
  Name: string | null
  Tags: any[]
  List: any[] | null
  filterTags: (item: any[]) => void
}


//-- PROPSs
export interface ContextProps {
  children: React.ReactNode
}