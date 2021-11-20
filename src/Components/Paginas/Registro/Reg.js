import React from 'react';
import Rodape from '../../Rodape/Rodape';
import Sociais from '../../Sociais/Sociais';
import PageBanner from '../../PageBanner/PageBanner';
import CabecalhoP from '../../CabecalhoPaginas/CabecalhoP';
import Registro from '../../Registro';

function Reg() {
  return (
    <>
      <CabecalhoP />
      <PageBanner />
      <Registro />
      <Sociais />
      <Rodape />
    </>
  );
}

export default Reg;