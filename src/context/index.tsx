import { createContext } from 'react';
import { IArtist, IDiscs, INews } from '../interfaces';

interface UserContextType {
  context: {
    isLoading: boolean;
    dataNews: INews[] | undefined;
    dataArtists: IArtist[] | undefined;
    dataDiscs: IDiscs[] | undefined;
    searchInput: string;
    setSearchInput: (text: string) => void;
    filterNews: INews[] | undefined;
    searchInputArtist: string;
    setSearchInputArtist: (text: string) => void;
    filterArtist: IArtist[] | undefined;
    searchInputDiscs: string;
    setSearchInputDiscs: (text: string) => void;
    filterDiscs: IDiscs[] | undefined;
  };
}

const context = createContext<UserContextType>({
  context: {
    isLoading: true,
    dataNews: [],
    dataArtists: [],
    dataDiscs: [],
    searchInput: '',
    setSearchInput: () => '',
    filterNews: [],
    searchInputArtist: '',
    setSearchInputArtist: () => '',
    filterArtist: [],
    searchInputDiscs: '',
    setSearchInputDiscs: () => '',
    filterDiscs: [],
  }
});

export default context;