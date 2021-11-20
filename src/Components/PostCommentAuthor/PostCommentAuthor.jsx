import React, { useState } from 'react';
import { useParams } from 'react-router';
import api from '../../Api.js'
import { Link } from 'react-router-dom';

function PostCommentAuthor() {

    const autor = useParams();
    const baseUrl = `/Author/${autor.authorId}/Comments`;

    const [data, setData] = useState([]);

    const [leitorSelecionado, setLeitorSelecionado] = useState({
        id: '',
        UserName: '',
        Comment: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setLeitorSelecionado({
            ...leitorSelecionado, [name]: value
        });
    }

    const leitorPost = async () => {
        delete leitorSelecionado.id;
        await api.post(baseUrl, leitorSelecionado)
            .then(response => {
                alert('COMENTÁRIO POSTADO COM SUCESSO');
                setData(data.concat(response.data));
            }).catch(error => {
                alert('COMENTÁRIO NÃO EFETUADO');
            })    
    }
    return (
        <>
           
            <div className='comment-respond' id='respond'>
                <h4 className='comment-reply-title' id='reply-title'>Deixe a sua opinião:</h4>
                <span className='underline left'></span>
                <form className='comment-form' id='commentform' method='post' action='#'>
                    <div className='row'>
                        <p className='comment-form-author input-required'>
                            <input name='UserName' id='UserName' type='text' placeholder='Nome' onChange={handleChange} />
                        </p>
                        <p className='comment-form-subject input-required'>
                        </p>
                        <p className='comment-form-comment'>
                            <textarea type='text' name='Comment' id='Comment' placeholder='Opinião' onChange={handleChange}></textarea>
                        </p>
                    </div>
                    <div className='clearfix'></div>
                    <div className='clear'></div>
                    <Link className='btn btn-dark-gray' to='#' onClick={() => leitorPost()}>Cadastrar</Link>
                    <div className='clear'></div>
                </form>
            </div>
        </>
    );
}

export default PostCommentAuthor;
