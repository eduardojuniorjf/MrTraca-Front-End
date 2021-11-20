import React from 'react';
import Rodape from '../../Rodape/Rodape';
import Sociais from '../../Sociais/Sociais';
import PageBanner from '../../PageBanner/PageBanner';
import CabecalhoP from '../../CabecalhoPaginas/CabecalhoP';
import ListaLivro from '../../ListaLivro';
import BarraLateral from '../../BarraLateral';





function Livro() {
  return (
    <>
      <CabecalhoP/>
      <PageBanner />
      < div id='content' className='site-content' >
        <div id='primary' className='content-area'>
          <main id='main' className='site-main'>
            <div className='books-media-gird'>
              <div className='container'>
                <div className='row'>
                  <ListaLivro />
                  <BarraLateral/>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div >
      <Sociais />
      <Rodape />
    </>
  );
}

export default Livro;