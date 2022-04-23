import { INews, IArtist, IDiscs } from '../interfaces';
import axios from 'axios';

const resquestNews = async (): Promise<INews | undefined> => {
  try {
    const response = await axios.get('/api/genre/21/news.json');
    const json = response.data.data;

    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const resquestArtists = async (): Promise<IArtist | undefined> => {
  try {
    const response = await axios.get('/api/genre/1/artists.json');
    const json = response.data.data;

    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const resquestDiscs = async (): Promise<IDiscs | undefined> => {
  try {
    const response = await axios.get('/api/genre/1/albums.json');
    
    const json = response.data.data;

    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export {
  resquestNews,
  resquestArtists,
  resquestDiscs,
};
