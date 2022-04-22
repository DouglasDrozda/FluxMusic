import { createContext } from 'react';
import { INews } from '../interfaces';

interface UserContextType {
  context: {
    isLoading: boolean;
    dataNews: INews[] | undefined;
    searchInput: string;
    setSearchInput: (text: string) => void;
    filterNews: INews[] | undefined;
  };
}

const context = createContext<UserContextType>({
  context: {
    isLoading: true,
    dataNews: [],
    searchInput: '',
    setSearchInput: () => '',
    filterNews: [],
  }
});

export default context;