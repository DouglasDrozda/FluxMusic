import React, { useState, useEffect } from 'react';
import Context from './index';
import requestAPI from '../services/apiRequest';
import { INews } from '../interfaces';

interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export function Provider({ children }: Iprops): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [dataNews, setDataNews] = useState<INews[] | undefined>();

  const getNews = async (): Promise<void> => {
    const response = await requestAPI() as INews[] | undefined;
    
    setDataNews(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getNews();
  },[])

  const context = {
    isLoading,
    dataNews,
  };

  return <Context.Provider value={{ context }}>{children}</Context.Provider>;
}
