import { createContext } from 'react';
import { INews } from '../interfaces';

interface UserContextType {
  context: {
    isLoading: boolean;
    dataNews: INews[] | undefined;
  };
}

const context = createContext<UserContextType>({
  context: {
    isLoading: true,
    dataNews: [],
  }
});

export default context;