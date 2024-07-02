import axios from 'axios'
import { SBNProps, FBTProps } from '../types'


export const URL_BACK = `http://localhost:3005`
export const URL_SBN = `search_by_name`
export const URL_FBT = `filter_by_tag`


export const searchByName = ({
  name,
  setList
}: SBNProps) => {
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
export const filterByTag = ({
  tags,
  setList
}: FBTProps) => {
  axios.get(`${URL_BACK}/${URL_FBT}`, {
    params: { tags }
  })
  .then(response => {
    setList(response.data.results)
    console.log('Pesquisa por categoria realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por categoria deu ruim: ', error)
  })
}