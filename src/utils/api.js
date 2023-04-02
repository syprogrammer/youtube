import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/search/',
  params: {hl: 'en', gl: 'IN'},
  headers: {
    // 'X-RapidAPI-Key': 'fcdda6022amsh08abef535ef806dp1dc73cjsn0a23d1eeca9a',
    'X-RapidAPI-Key': 'd4d59f48abmsh7c96dc63827359dp13f73djsn2dac4372b5b7',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};