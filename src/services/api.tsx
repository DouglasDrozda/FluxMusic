import axios from 'axios';  

const apiNews = axios.create({
  baseURL: import.meta.env.VITE_TIMELINE || 'https://api.music-story.com/en/genre/21/',
});

const apiArtists = axios.create({
  baseURL: import.meta.env.VITE_ARTISTS || 'http://api.music-story.com/en/genre/1/',
});

const apiDiscs = axios.create({
  baseURL: import.meta.env.VITE_DISCS || 'http://api.music-story.com/en/genre/1/',
});


export {
  apiNews,
  apiArtists,
  apiDiscs,
};
