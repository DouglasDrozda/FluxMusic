import React, { useState, useEffect } from 'react';
import Context from './index';
import requestAPI from '../services/apiRequest';
import { INews } from '../interfaces';
import infoFromNews from '../dataImages';

interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export function Provider({ children }: Iprops): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [dataNews, setDataNews] = useState<INews[] | undefined>();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterNews, setFilterNews] = useState<INews[] | undefined>(dataNews);

  const getNews = async (): Promise<void> => {
    const response = await requestAPI() as INews[] | undefined;
    
    const newResponse = response?.map((news) => {
      const infos = infoFromNews.find((info) => info.id === news.id);
      
      return {
        ...news, ...infos
      }
    });
    
    setDataNews(newResponse);
    setIsLoading(false);
  };

  const getFilterNews = async (): Promise<void> => {
    const includeNews = dataNews
      ?.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()));
    setFilterNews(includeNews);
  }

  useEffect(() => {
    getNews();
  }, [])

  useEffect(() => {
    getFilterNews();
  }, [searchInput])

  const context = {
    isLoading,
    dataNews,
    searchInput,
    setSearchInput,
    filterNews,
  };

  return <Context.Provider value={{ context }}>{children}</Context.Provider>;
}
