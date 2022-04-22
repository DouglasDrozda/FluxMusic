import axios from 'axios';  

const apiNews = axios.create({
  baseURL: import.meta.env.VITE_TIMELINE,
});

const apiArtists = axios.create({
  baseURL: import.meta.env.VITE_ARTISTS,
});


export {
  apiNews,
  apiArtists,
};
