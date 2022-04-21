import { INews } from '../interfaces';
import api from './api';

const resquestNews = async (): Promise<INews | undefined> => {
  try {
    const response = await api.get('news.json');
    const json = response.data.data;

    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export default resquestNews;
