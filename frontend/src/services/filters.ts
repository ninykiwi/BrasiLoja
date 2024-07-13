import axios from 'axios'


export const URL_BACK = `http://localhost:3005`
export const URL_SBN = `search_by_name`
export const URL_FBC = `filter_by_category`


export const filterByName = (
  name: string,
  setList: React.Dispatch<React.SetStateAction<{}[]>>
) => {
  axios.get(`${URL_BACK}/${URL_SBN}`, {
    params: { name }
  })
  .then(response => {
    setList(response.data)
    console.log('Pesquisa por nome realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por nome deu ruim: ', error)
  })
}

export const filterByCategory = (
  Category: string,
  setList?: React.Dispatch<React.SetStateAction<{}[]>>
) => {
  axios.get(`${URL_BACK}/${URL_FBC}/${Category}`, {
    params: { Category }
  })
  .then(response => {
    if (!setList) {
      console.log('Pesquisa por categoria realizada com sucesso')
      return (response.data)
    } else {
      setList(response.data)
    }
    console.log('Pesquisa por categoria realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por categoria deu ruim: ', error)
  })
}