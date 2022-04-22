import React, { useState, useEffect } from 'react';
import Context from './index';
import { resquestNews, resquestArtists } from '../services/apiRequest';
import { INews, IArtist } from '../interfaces';
import infoFromNews from '../dataImages';
import imageArtists from '../dataImagesArtists';

interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export function Provider({ children }: Iprops): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [dataNews, setDataNews] = useState<INews[] | undefined>();
  const [dataArtists, setDataArtists] = useState<IArtist[] | undefined>();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterNews, setFilterNews] = useState<INews[] | undefined>(dataNews);
  const [searchInputArtist, setSearchInputArtist] = useState<string>('');
  const [filterArtist, setFilterArtist] = useState<IArtist[] | undefined>(dataArtists);

  const getNews = async (): Promise<void> => {
    const response = await resquestNews() as INews[] | undefined;

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

  const getArtists = async (): Promise<void> => {
    const response = await resquestArtists() as IArtist[] | undefined;
    const newResponse = response?.map((art) => {
      const infos = imageArtists.find((info) => info.id === art.id);

      return {
        ...art, ...infos
      }
    });
    
    setDataArtists(newResponse);
    setIsLoading(false);
  };

  const getFilterArtists = async (): Promise<void> => {
    const includeArtist = dataArtists
    ?.filter((item) =>
      item.name.toLowerCase().includes(searchInputArtist.toLowerCase()));
      setFilterArtist(includeArtist);
  }

  useEffect(() => {
    getNews();
    getArtists();
  }, [])

  useEffect(() => {
    getFilterNews();
  }, [searchInput])

  useEffect(() => {
    getFilterArtists();
  }, [searchInputArtist])

  const context = {
    isLoading,
    dataNews,
    dataArtists,
    searchInput,
    setSearchInput,
    searchInputArtist,
    setSearchInputArtist,
    filterNews,
    filterArtist,
  };

  return <Context.Provider value={{ context }}>{children}</Context.Provider>;
}
