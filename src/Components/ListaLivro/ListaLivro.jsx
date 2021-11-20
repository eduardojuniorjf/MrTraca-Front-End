import React, { useEffect, useState } from 'react';
import api from '../../Api.js'
import { Link } from 'react-router-dom';
import SearchInputAuthor from '../SearchImputAuhor/SearchInputAuthor.js';
import SearchImputPublisher from '../SearchImputPublisher/SearchImputPublisher.js';
import SearchInputBook from '../SearchImputBook/SearchInputBook.js';

function ListaLivro() {
    const [livros, setLivros] = useState([{}]);
    const [text, setTextBook] = useState('');
    const [autor, setTextAutor] = useState('');
    const [editora, setTextEditora] = useState('');

    useEffect(() => {
        api.get(`/Book?book=${text}&publisher=${editora}&author=${autor}`)
            .then(res => {
                const dados = res.data
                setLivros(dados)
            })
    }, [text, editora, autor]);

    return (
        <>
        
            <div className='row'>
                <section className='search-filters'>
                    <div className='container'>
                        <div className='filter-box'>
                            <h3>O que você está procurando?</h3>
                            <form action='#' method='get'>
                                <div className='col-md-12 col-sm-6'>
                                    <div className='col-md-4 col-sm-6'>
                                        <SearchInputBook value={text} onChange={(book) => setTextBook(book)}/>
                                    </div>
                                    <div className='col-md-4 col-sm-6'>
                                        <SearchInputAuthor value={autor} onChange={(author) => setTextAutor(author)}/>
                                    </div>
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
                <br />
                <div className='books-gird'>
                    <ul> {livros.map(livro =>
                        <li>
                            <Link to={`/livrodetalhe/${livro.bookId}`} className='dropdown-toggle disabled'>
                                <figure>
                                    <img src={`data:image/;base64,${livro.bookCover}`} alt='Livro' />
                                </figure>
                            </Link>
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default ListaLivro;