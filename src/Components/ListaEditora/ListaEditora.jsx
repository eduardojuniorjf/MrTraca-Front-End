import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Api.js'
import SearchImputPublisher from '../SearchImputPublisher/SearchImputPublisher.js';


function ListaEditora() {

    const [editoras, setEditoras] = useState([{}]);
    const [editora, setTextEditora] = useState('');

    useEffect(() => {
        api.get(`/Publisher?name=${editora}`)
            .then(res => {
                const dados = res.data
                setEditoras(dados)
            })
    }, [editora]);

    return (
        <>
            <div className='row'>
                <section className='search-filters'>
                    <div className='container'>
                        <div className='filter-box'>
                            <h3>Qual editora você está procurando?</h3>
                            <form action='#' method='get'>
                                <div className='col-md-12 col-sm-6'>
                                    <div className='col-md-4 col-sm-6'>
                                        <SearchImputPublisher value={editora} onChange={(publisher) => setTextEditora(publisher)}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <div className='col-md-9 col-md-push-3'>
                <div className='books-list'>
                    {editoras.map(editora =>
                        <article>
                            <div className='single-book-box'>
                                <div className='post-thumbnail'>
                                    <Link to={`/editoradetalhe/${editora.publisherId}`}>
                                        <img alt='Book' src={`data:image/;base64,${editora.publisherImg}`} /></Link>                                                                 </div>
                                <div className='post-detail'>
                                    <header className='entry-header'>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <ul>
                                                    <li><strong>Editora: </strong>{editora.name}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </header>
                                    <div className='entry-content'>
                                        <p align='justify'>{editora.resume}</p>
                                    </div>
                                    <footer className='entry-footer'>
                                        <Link className='btn btn-dark-gray' to={`/editoradetalhe/${editora.publisherId}`}>Leia mais</Link>
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


export default ListaEditora;
