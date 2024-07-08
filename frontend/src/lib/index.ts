import { ListTypes } from "@/types";


export const listValues = (tipo?:  ListTypes) => {
  
  switch (tipo) {
    default:
      return {
        Title: 'Produtos',
        Carousel: true
      }
    case 'Ofertas':
      return {
        Title: 'Ofertas e Promoções',
        Carousel: true
      }
    case 'VejaTambem':
      return {
        Title: 'Conheça também',
        Carousel: true
      }
    case 'VocePodeGostar':
      return {
        Title: 'Você pode gostar',
        Carousel: true
      }
    case 'VistosRecentemente':
      return {
        Title: 'Vistos Recentemente',
        Carousel: true
      }
    case 'OutrosProdutos':
      return {
        Title: 'Outros Produtos',
        Carousel: true
      }
    case 'ProdutosSimilares':
      return {
        Title: 'Produtos Similares',
        Carousel: true
      }
  }
}
