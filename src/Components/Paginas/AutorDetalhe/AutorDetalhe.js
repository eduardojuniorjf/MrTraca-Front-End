import React from 'react';
import Rodape from '../../Rodape/Rodape';
import Sociais from '../../Sociais/Sociais';
import PageBanner from '../../PageBanner/PageBanner';
import CabecalhoP from '../../CabecalhoPaginas/CabecalhoP';
import DetalheAutor from '../../DetalheAutor';
import PostCommentAuthor from '../../PostCommentAuthor';
import ComentariosAutores from '../../ComentariosAutores';

function AutorDetalhe() {
  return (
    <>
      <CabecalhoP />
      <PageBanner />
      <div id='content' className='site-content'>
        <div id='primary' className='content-area'>
          <main id='main' className='site-main'>
            <div className='blog-detail-main'>
              <div className='container'>
                <div className='row'>
                  <div className='containerd'>
                    <div className='booksmedia-detail-box'>
                      <DetalheAutor />
                      <ComentariosAutores />
                      <PostCommentAuthor />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Sociais />
      <Rodape />
    </>
  );
}

export default AutorDetalhe;