import { createContext } from 'react';
import { IArtist, INews } from '../interfaces';

interface UserContextType {
  context: {
    isLoading: boolean;
    dataNews: INews[] | undefined;
    dataArtists: IArtist[] | undefined
    searchInput: string;
    setSearchInput: (text: string) => void;
    filterNews: INews[] | undefined;
    searchInputArtist: string;
    setSearchInputArtist: (text: string) => void;
    filterArtist: IArtist[] | undefined;
  };
}

const context = createContext<UserContextType>({
  context: {
    isLoading: true,
    dataNews: [],
    dataArtists: [],
    searchInput: '',
    setSearchInput: () => '',
    filterNews: [],
    searchInputArtist: '',
    setSearchInputArtist: () => '',
    filterArtist: [],
  }
});

export default context;