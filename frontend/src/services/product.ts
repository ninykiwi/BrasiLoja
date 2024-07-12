import axios from 'axios'
import { ProductCategories } from '@/types'


export const URL_BACK = `http://localhost:3005`
export const URL_MP = `make_product`
export const URL_EP = `edit_product`
export const URL_DP = `delete_product`
export const URL_GPI = `get_product_by_id`

export const createProduct = (
  prodName: string,
  prodPrice: number,
  prodQuant: number,
  prodCat: string,
  prodBrand: string,
  mainImg: any,
  img1?: any,
  img2?: any,
  img3?: any,
  img4?: any,
) => {
  axios.post(`${URL_BACK}/${URL_MP}`, {
    prod_name: prodName,
    prod_price: prodPrice,
    prod_quant: prodQuant,
    prod_cat: prodCat,
    prod_brand: prodBrand,
    main_img: mainImg,
    img_1: img1,
    img_2: img2,
    img_3: img3,
    img_4: img4
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

export const getProductById = (
  prodId: number,
  setProductPageInfo: (React.Dispatch<React.SetStateAction<{}>>)
) => {
  axios.get(`${URL_BACK}/${URL_GPI}/${prodId}`)
    .then(response => {
      setProductPageInfo(response.data)
      console.log('Produto encontrado com sucesso')
    })
    .catch(error => {
      console.error('Erro ao encontrar produto: ', error)
    })
}

export const getAllProducts = (
  setList: React.Dispatch<React.SetStateAction<{}[]>>
) => {
  axios.get(`${URL_BACK}/get_all`)
    .then(response => {
      setList(response.data)
      console.log('Produtos encontrados com sucesso')
    })
    .catch(error => {
      console.error('Erro ao encontrar produtos: ', error)
    })
}