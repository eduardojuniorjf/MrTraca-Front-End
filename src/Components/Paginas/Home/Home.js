import React, {useEffect, useState} from 'react';
import Banner from '../../Banner/Banner';
import Cabecalho from '../../Cabecalho/Cabecalho';
import Slider from '../../NetflixSlider'
import Categoria from '../../Categoria/Categoria';
import Rodape from '../../Rodape/Rodape';
import Sociais from '../../Sociais/Sociais';
import api from '../../../Api.js'

function Home() {
  
  const [livros, setLivros] = useState([{}]);

  useEffect(() => {
      api.get('/Book/Random')
          .then(res => {
              const dados = res.data
              setLivros(dados)
          })
  }, []);

  return (
    <>
      <Banner />
      <Cabecalho />
      <Categoria />
      <div className='spaceghostnet'></div>
      <Slider>
          {livros.map(livro => (
            <Slider.Item movie={livro} key={livro.bookId}></Slider.Item>
          ))}
      </Slider>
      <Sociais />
      <Rodape />
    </>
  );
}

export default Home;
