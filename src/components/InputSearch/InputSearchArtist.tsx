import React, { useContext } from 'react';
import '../../styles/InputSearch.css';
import context from '../../context';
import { IHandleCHange } from '../../interfaces';

function InputSearchArtist(): JSX.Element {
  const { searchInputArtist, setSearchInputArtist } = useContext(context).context;

  const handleChangeInput = ({ target: { value } }: IHandleCHange): void => {
    setSearchInputArtist(value);
  };

  return (
    <section className="inputSearch-container">
      <form className="menu-input-container">
        <input
          type="search"
          placeholder="Buscar artista..."
          onChange={handleChangeInput}
          value={searchInputArtist}
          className="inputSearch"
        />
      </form>
    </section>
  );
};

export default InputSearchArtist;
