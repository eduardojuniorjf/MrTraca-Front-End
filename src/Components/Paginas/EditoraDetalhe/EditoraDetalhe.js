import React from 'react';
import Rodape from '../../Rodape/Rodape';
import Sociais from '../../Sociais/Sociais';
import PageBanner from '../../PageBanner/PageBanner';
import CabecalhoP from '../../CabecalhoPaginas/CabecalhoP';
import DetalheEditora from '../../DetalheEditora';
import PostCommentPublisher from '../../PostCommentPublisher';
import ComentariosEditoras from '../../ComentariosEditoras';

function EditoraDetalhe() {
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
                      <DetalheEditora />
                      <ComentariosEditoras />
                      <PostCommentPublisher />
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

export default EditoraDetalhe;