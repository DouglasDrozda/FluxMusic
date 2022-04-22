import React, { useContext } from 'react';
import '../../styles/InputSearch.css';
import context from '../../context';
import { IHandleCHange } from '../../interfaces';

function InputSearch(): JSX.Element {
  const { searchInput, setSearchInput } = useContext(context).context;

  const handleChangeInput = ({ target: { value } }: IHandleCHange): void => {
    setSearchInput(value);
  };

  return (
    <section className="inputSearch-container">
      <form className="menu-input-container">
        <input
          type="search"
          placeholder="Buscar notícia..."
          onChange={handleChangeInput}
          value={searchInput}
          className="inputSearch"
        />
      </form>
    </section>
  );
};

export default InputSearch;
