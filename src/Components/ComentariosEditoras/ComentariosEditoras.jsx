import React, { useEffect, useState } from 'react';
import api from '../../Api.js'
import { useParams } from 'react-router';


function ComentariosEditoras() {

    const editora = useParams();
    const baseUrl = `/Publisher/${editora.publisherId}/Comments`;
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
                <ul className='comment-list'>{comentarios.map(editora =>
                    <li className='comment even thread-even parent'>
                        <div className='comment-body'>
                            <div className='comment-author vcard'>
                                <b className='fn'>
                                    <p><b>{editora.userName}</b> - <b>{editora.datePosting} </b></p>
                                </b>
                            </div>
                            <footer className='comment-meta'>
                                <div className='left-arrow'></div>
                                <div className='reply'>
                                </div>
                                <div className='comment-metadata'>
                                </div>
                                <div className='comment-content'>
                                    <p>{editora.comment}</p>
                                </div>
                            </footer>
                        </div>
                    </li>)}
                </ul>
            </div>

        </>
    );
}

export default ComentariosEditoras;
