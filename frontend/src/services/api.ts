import axios from 'axios'


export const URL_BACK = `http://localhost:3005`
export const URL_SBN = `search_by_name`
export const URL_FBT = `filter_by_tag`


export const searchByName = (
  name: string,
  setList: React.Dispatch<React.SetStateAction<{}[]>>
) => {
  axios.get(`${URL_BACK}/${URL_SBN}`, {
    params: { name }
  })
  .then(response => {
    setList(response.data.results)
    console.log('Pesquisa por nome realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por nome deu ruim: ', error)
  })
}
export const filterByTag = (
  Tags: string[],
  setList: React.Dispatch<React.SetStateAction<{}[]>>
) => {
  axios.get(`${URL_BACK}/${URL_FBT}`, {
    params: { Tags }
  })
  .then(response => {
    setList(response.data.results)
    console.log('Pesquisa por categoria realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por categoria deu ruim: ', error)
  })
}