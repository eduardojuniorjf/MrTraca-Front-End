import React from 'react';
import Rodape from '../../Rodape/Rodape';
import Sociais from '../../Sociais/Sociais';
import PageBanner from '../../PageBanner/PageBanner';
import CabecalhoP from '../../CabecalhoPaginas/CabecalhoP';
//import BarraBusca from '../../BarraDeBusca';
import ListaAutor from '../../ListaAutor';
import BarraLateral from '../../BarraLateral';




function Autor() {
  return (
    <>
      <CabecalhoP />
      <PageBanner />
      < div id='content' className='site-content' >
        <div id='primary' className='content-area'>
          <main id='main' className='site-main'>
            <div className='books-media-gird'>
              <div className='container'>
                {/*<BarraBusca />*/}
                <div className='row'>
                  <ListaAutor />
                  <BarraLateral />
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

export default Autor;