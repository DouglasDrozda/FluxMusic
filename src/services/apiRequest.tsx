import { INews, IArtist, IDiscs } from '../interfaces';
import { apiNews, apiArtists, apiDiscs } from './api';

const resquestNews = async (): Promise<INews | undefined> => {
  try {
    const response = await apiNews.get('news.json');
    const json = response.data.data;

    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const resquestArtists = async (): Promise<IArtist | undefined> => {
  try {
    const response = await apiArtists.get('artists.json');
    const json = response.data.data;

    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const resquestDiscs = async (): Promise<IDiscs | undefined> => {
  try {
    const response = await apiDiscs.get('albums.json');
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
