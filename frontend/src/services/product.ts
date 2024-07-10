import axios from 'axios'
import { productCategories } from '@/types'


export const URL_BACK = `http://localhost:3005`
export const URL_MP = `make_product`
export const URL_EP = `edit_product`
export const URL_DP = `delete_product`


export const createProduct = (
  prodName: string,
  prodPrice: number,
  prodQuant: number,
  prodCat: productCategories,
  prodBrand: string
) => {
  axios.post(`${URL_BACK}/${URL_MP}`, {
    prod_name: prodName,
    prod_price: prodPrice,
    prod_quant: prodQuant,
    prod_cat: prodCat,
    prod_brand: prodBrand
  })
    .then(response => {
      console.log(response.statusText)
    })
    .catch(error => {
      console.error('Erro ao criar produto: ', error)
    })
}


export const editProduct = () => {

}


export const deleteProduct = (
  prodId: number
) => {
  axios.post(`${URL_BACK}/${URL_DP}`, {
    prod_id: prodId
  })
    .then(response => {
      console.log(response.statusText)
    })
    .catch(error => {
      console.error('Erro ao deletar produto: ', error)
    })
}