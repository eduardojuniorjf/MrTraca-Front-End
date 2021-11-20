import React from 'react';
import Rodape from '../../Rodape/Rodape';
import Sociais from '../../Sociais/Sociais';
import PageBanner from '../../PageBanner/PageBanner';
import CabecalhoP from '../../CabecalhoPaginas/CabecalhoP';
import SugereLivro from '../../SugereLivro';
import DetalheLivro from '../../DetalheLivro';
import TabelaEmprestimo from '../../TabelaEmprestimo';
import PostCommentBook from '../../PostCommentBook';
import ComentariosLivros from '../../ComentariosLivros';

function LivroDetalhe() {

  return (
    <>
      <CabecalhoP />
      <PageBanner />
      <div id='content' className='site-content'>
        <div id='primary' className='content-area'>
          <main id='main' className='site-main'>
            <div className='booksmedia-detail-main'>
              <div className='container'>
                <div className='row'>
                  <div className='containerd'>
                    <div className='booksmedia-detail-box'>
                      <DetalheLivro />
                      <TabelaEmprestimo />
                      <ComentariosLivros />
                      <PostCommentBook />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <SugereLivro />
      <Sociais />
      <Rodape />
    </>
  );
}

export default LivroDetalhe;