import axios from 'axios'


export const URL_BACK = `http://localhost:3005`
export const URL_SBN = `search_by_name`
export const URL_FBT = `filter_by_tag`


export const filterByName = (
  name: string,
  setList: React.Dispatch<React.SetStateAction<{}[]>>
) => {
  axios.get(`${URL_BACK}/${URL_SBN}/${name}`, {
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

export const filterByTag = (
  Tags: string[] | string,
  setList?: React.Dispatch<React.SetStateAction<{}[]>>
) => {
  axios.get(`${URL_BACK}/${URL_FBT}/${Tags}`, {
    params: { Tags }
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