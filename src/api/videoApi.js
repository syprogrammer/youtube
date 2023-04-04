import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

console.log(import.meta.env.VITE_APP_YOUTUBE_API_KEY)
const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/search/',
  params: {hl: 'en', gl: 'IN'},
  headers: { 
    'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  console.log(import.meta.env.VITE_APP_YOUTUBE_API_KEY)
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};