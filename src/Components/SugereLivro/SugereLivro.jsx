import React, { useState, useEffect } from 'react';
import api from '../../Api.js'

function SugereLivro() {

    const [livros, setLivros] = useState([{}]);

    useEffect(() => {

        api.get('/Book/Random?rand=true')
            .then(res => {
                const dados = res.data
                setLivros(dados)
            })
    }, []);

    return (
        <>
            <hr />
            <div className='booksmedia-fullwidth'>
                <span className='underline center'></span>
                <div className='container'>
                    <h2 className='section-title-sugest text-center'>Outros livros que a traça provou e gostou</h2>
                    <span className='underline center'></span>
                    <ul className='popular-items-detail-v2'>
                        {livros.map(livro =>
                            <li><a href={`/livrodetalhe/${livro.bookId}`} className='dropdown-toggle disabled' target='-blank'>
                                <figure>
                                    <img src={`data:image/;base64,${livro.bookCover}`} alt='Livro' />
                                    <figcaption>
                                        <header>
                                            <p><strong>Autor:</strong> {livro.authorName} </p>
                                            <p><strong>Data de Lançamento: </strong> {livro.published}</p>
                                            <p><strong>Editora: </strong> {livro.publisherName}</p>
                                        </header>
                                        <p>{livro.about}</p>
                                    </figcaption>
                                </figure></a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SugereLivro;
