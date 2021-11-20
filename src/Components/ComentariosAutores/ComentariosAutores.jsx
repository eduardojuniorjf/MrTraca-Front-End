import React, { useEffect, useState } from 'react';
import api from '../../Api.js'
import { useParams } from 'react-router';

function ComentariosAutores() {

    const autor = useParams();
    const baseUrl = `/Author/${autor.authorId}/Comments`;
    const [comentarios, setComentarios] = useState([{}]);


    useEffect(() => {

        api.get(baseUrl)
            .then(res => {
                const dados = res.data
                setComentarios(dados)
            })
    },[]);

    return (
        <>
            <div className='comment-bg'>
                <h4 className='comments-title'>Opiniões de leitores</h4>
                <span className='underline left'></span>
                <ul className='comment-list'>{comentarios.map(autor =>
                    <li className='comment even thread-even parent'>
                        <div className='comment-body'>
                            <div className='comment-author vcard'>
                                <b className='fn'>
                                    <p><b>{autor.userName}</b> - <b>{autor.datePosting} </b></p>
                                </b>
                            </div>
                            <footer className='comment-meta'>
                                <div className='left-arrow'></div>
                                <div className='reply'>
                                </div>
                                <div className='comment-metadata'>
                                </div>
                                <div className='comment-content'>
                                    <p>{autor.comment}</p>
                                </div>
                            </footer>
                        </div>
                    </li>)}
                </ul>
            </div>

        </>
    );
}

export default ComentariosAutores;
