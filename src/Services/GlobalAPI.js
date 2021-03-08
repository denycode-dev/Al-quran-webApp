import axios from 'axios'

const defaultAPI = 'https://al-quran-8d642.firebaseio.com/'
const API = ''

const GET = (root, path) => {
  const promise = new Promise((resolve, reject)=>{
    axios.get(`${root ? defaultAPI : API}/${path}`)
    .then((res)=>{
      resolve(res.data)
    },(err) => {
      reject(err)
    })
  })
  return promise
}

const getSurahInfo = ()=> GET(true, 'data.json');

const APIConfig = {
  getSurahInfo
}

export default APIConfig