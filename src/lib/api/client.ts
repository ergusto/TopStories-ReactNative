import axios from "axios";

export const NYTClient = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  params: {
    'api-key': process.env.NYT_API_KEY
  }
})
