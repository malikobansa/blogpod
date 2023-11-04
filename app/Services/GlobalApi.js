import { create } from "apisauce"

const api = create({
    baseURL: 'https://newsapi.org/v2',
  })

const apiKey ='?country=ng&apiKey=5923c983e11d4d01a29b697669f485a4'

const getTopHeadline = api.get("/top-headline" + apiKey)
const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=5923c983e11d4d01a29b697669f485a4")

export default{
    getTopHeadline
}