import React, { useState, useEffect } from 'react';
import Context from './index';
import { resquestNews, resquestArtists, resquestDiscs } from '../services/apiRequest';
import { INews, IArtist, IDiscs } from '../interfaces';
import infoFromNews from '../dataImages';
import imageArtists from '../dataImagesArtists';
import infosDiscs from '../dataInfosDiscs';

interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export function Provider({ children }: Iprops): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [dataNews, setDataNews] = useState<INews[] | undefined>();
  const [dataArtists, setDataArtists] = useState<IArtist[] | undefined>();
  const [dataDiscs, setDataDiscs] = useState<IDiscs[] | undefined>();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterNews, setFilterNews] = useState<INews[] | undefined>(dataNews);
  const [searchInputArtist, setSearchInputArtist] = useState<string>('');
  const [filterArtist, setFilterArtist] = useState<IArtist[] | undefined>(dataArtists);
  const [searchInputDiscs, setSearchInputDiscs] = useState<string>('');
  const [filterDiscs, setFilterDiscs] = useState<IDiscs[] | undefined>(dataDiscs);

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

  const getDiscs = async (): Promise<void> => {
    const response = await resquestDiscs() as IDiscs[] | undefined;
    const newResponse = response?.map((disc) => {
      const infos = infosDiscs.find((info) => info.id === disc.id);

      return {
        ...disc, ...infos
      }
    });
    
    setDataDiscs(newResponse);
    setIsLoading(false);
  };

  const getFilterDiscs = async (): Promise<void> => {
    const includeDiscs = dataDiscs
    ?.filter((item) =>
      item.title.toLowerCase().includes(searchInputDiscs.toLowerCase()));
      setFilterDiscs(includeDiscs);
  }

  useEffect(() => {
    getNews();
    getArtists();
    getDiscs();
  }, []);

  useEffect(() => {
    getFilterNews();
  }, [searchInput]);

  useEffect(() => {
    getFilterArtists();
  }, [searchInputArtist]);

  useEffect(() => {
    getFilterDiscs();
  }, [searchInputDiscs])

  const context = {
    isLoading,
    dataNews,
    dataArtists,
    dataDiscs,
    searchInput,
    setSearchInput,
    searchInputArtist,
    setSearchInputArtist,
    filterNews,
    filterArtist,
    searchInputDiscs,
    setSearchInputDiscs,
    filterDiscs,
  };

  return <Context.Provider value={{ context }}>{children}</Context.Provider>;
}
