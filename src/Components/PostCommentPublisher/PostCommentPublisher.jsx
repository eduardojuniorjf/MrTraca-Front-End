import React, { useState } from 'react';
import { useParams } from 'react-router';
import api from '../../Api.js'
import { Link } from 'react-router-dom';

function PostCommentPublisher() {

    const editora = useParams();
    const baseUrl = `/Publisher/${editora.publisherId}/Comments`;

    const [data, setData] = useState([]);

    const [editoraSelecionada, seteditoraSelecionada] = useState({
        id: '',
        UserName: '',
        Comment: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        seteditoraSelecionada({
            ...editoraSelecionada, [name]: value
        });
    }

    function refreshPage(){
        window.location.reload(true);
    }

    const editoraPost = async () => {
        delete editoraSelecionada.id;
        await api.post(baseUrl, editoraSelecionada)
            .then(response => {
                alert('COMENTÁRIO POSTADO COM SUCESSO');
                setData(data.concat(response.data));
                refreshPage();    
            }).catch(error => {
                alert('COMENTÁRIO NÃO PUBLICADO');
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
                    <Link className='btn btn-dark-gray' onClick={() => editoraPost()}>Cadastrar</Link>
                    <div className='clear'></div>
                </form>
                <div className='spaceghost'></div>
            </div>
        </>
    );
}

export default PostCommentPublisher;
