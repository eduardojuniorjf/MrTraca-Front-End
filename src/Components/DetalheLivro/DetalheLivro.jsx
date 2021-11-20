import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../../Api.js'

function LivroDetalhe() {

    const livro = useParams();
    const [data, setData] = useState();
    const livroGet = () => {
        api.get(`/Book/${livro.bookId}`)
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        livroGet();
    }, [])

    return (
        <>
            <div className='detailed-box'>
                <p></p>
                <div className='col-xs-12 col-sm-5 col-md-3'>
                    <div className='post-thumbnail'>
                        <img src={`data:image/;base64,${data?.bookCover}`} alt={`${data?.name}`} />
                    </div>
                </div>
                <div className='col-xs-12 col-sm-7 col-md-6'>
                    <div className='post-center-content'>
                        <ul>
                            <h2>{data?.name}</h2>
                            <p><strong>Lançamento: </strong>{data?.published} </p>
                            <p><strong>Gênero: </strong> {data?.genre} </p>
                            <p><strong>Editora: </strong> {data?.publisherName}</p>
                            <p><strong>Sinópse: </strong> {data?.about} </p>
                        </ul>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-3 '>
                    <div className='post-center-content'>
                        <Link to={`/registro/${livro.bookId}`} className='btn btn-dark-gray'>Disponibilizar para troca</Link>
                    </div>
                </div>
                <div className='post-center-content'></div>
            </div >
            <div className='clearfix'></div>
        </>
    );
}
export default LivroDetalhe;
