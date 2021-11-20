import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Api.js'
import SearchInputAuthor from '../SearchImputAuhor/SearchInputAuthor.js';

function AutorLista() {

    const [autores, setAutores] = useState([{}]);
    const [autor, setTextAutor] = useState('');

    useEffect(() => {
        api.get(`/Author?name=${autor}`)
            .then(res => {
                const dados = res.data
                setAutores(dados)
            })
    }, [autor]);
    return (
        <>
            <div className='row'>
                <section className='search-filters'>
                    <div className='container'>
                        <div className='filter-box'>
                            <h3>Qual autor você está procurando?</h3>
                            <form action='#' method='get'>
                                <div className='col-md-12 col-sm-6'>
                                    <div className='col-md-4 col-sm-6'>
                                        <SearchInputAuthor value={autor} onChange={(author) => setTextAutor(author)} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <div className='col-md-9 col-md-push-3'>
                <div className='books-list'>
                    {autores.map(autores =>
                        <article>
                            <div className='single-book-box'>
                                <div className='post-thumbnail'>
                                    <Link to={`/autordetalhe/${autores.authorId}`}>
                                        <img alt='Autor' src={`data:image/;base64,${autores.authorImg}`} /></Link>                                                                 </div>
                                <div className='post-detail'>
                                    <header className='entry-header'>
                                        <div className='row'>
                                            <div className='col-sm-9'>
                                                <ul>
                                                    <li><p><strong>Autor: </strong>{autores.name}</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </header>
                                    <div className='entry-content'>
                                        <p>{autores.resume}</p>
                                    </div>
                                    <footer className='entry-footer'>
                                        <Link className='btn btn-dark-gray' to={`/autordetalhe/${autores.authorId}`}>Leia mais</Link>
                                    </footer>
                                </div>
                                <div className='clear'></div>
                            </div>
                        </article>)}
                </div>
            </div>
        </>
    );
}

export default AutorLista;
