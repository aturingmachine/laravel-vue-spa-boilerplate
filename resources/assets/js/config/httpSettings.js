import axios from 'axios'

export const http = axios.create({
  baseURL: "", //this is the base url for all api calls
  headers: {} //any headers you need for base axios calls
})

//import this as `import { http } from ../config/httpSettings.js`