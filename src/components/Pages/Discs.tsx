import React, { useContext } from 'react';
import context from '../../context';
import Header from '../Header/Header';
import '../../styles/Discs.css';
import InputSearchDisc from '../InputSearch/InputSearchDisc';

function Discs(): JSX.Element {

  return (
    <>
      <Header />
      <InputSearchDisc />
      
    </>
  );
};

export default Discs;
