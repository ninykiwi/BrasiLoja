import axios from 'axios'


export const URL_BACK = `http://localhost:3005`
export const URL_SBN = `search_by_name`
export const URL_SBNP = `search_by_name_product`
export const URL_SBNB = `search_by_name_brand`
export const URL_FBC = `filter_by_category`


export const filterByName = (
  Name: string,
  setMainList: (list: any[]) => void
) => {
  axios.get(`${URL_BACK}/${URL_SBN}`, {
    params: { name: Name }
  })
  .then(response => {
    setMainList(response.data)
    console.log('Pesquisa por nome realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por nome deu ruim: ', error)
  })
}
export const filterByProductName = (
  ProductName: string,
  setMainList: (list: any[]) => void
) => {
  axios.get(`${URL_BACK}/${URL_SBNP}`, {
    params: { prod_name: ProductName }
  })
  .then(response => {
    setMainList(response.data)
    console.log('Pesquisa por nome realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por nome deu ruim: ', error)
  })
}
export const filterByBrandName = (
  BrandName: string,
  setMainList: (list: any[]) => void
) => {
  axios.get(`${URL_BACK}/${URL_SBNB}`, {
    params: { brand_name: BrandName }
  })
  .then(response => {
    setMainList(response.data)
    console.log('Pesquisa por nome realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por nome deu ruim: ', error)
  })
}

export const filterByCategory = (
  Category: string,
  setMainList?: (list: any[]) => void
) => {
  axios.get(`${URL_BACK}/${URL_FBC}/${Category}`)
  .then(response => {
    if (!setMainList) {
      console.log('Pesquisa por categoria realizada com sucesso')
      return (response.data)
    } else {
      setMainList(response.data)
    }
    console.log('Pesquisa por categoria realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por categoria deu ruim: ', error)
  })
}