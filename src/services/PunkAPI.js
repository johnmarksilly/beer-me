import axios from "axios"

const BASE_URI = 'https://api.punkapi.com/v2/beers'

export async function getBeers() {
  try {
    const response = await axios.get(BASE_URI)
    return response.data
  } catch (error) {
    console.log('Couldn\'t get beers')
    return []
  }
}

export async function getBeerById(id) {
  try {
    const response = await axios.get(`${BASE_URI}/${id}`)
    const { data } = response
    if (data.length > 0) {
      return data[0]
    }
  } catch (error) {
    console.log('Couldn\'t get beers')
  }
  return [] 
}