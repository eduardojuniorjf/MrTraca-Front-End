import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../Api.js'

function DetalheEditora() {

    const editora = useParams();
    const [data, setData] = useState();
    const editoraGet = () => {
        api.get(`/Publisher/${editora.publisherId}`)
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        editoraGet();
    }, [])

    return (
        <>
            <article>
                <div className='detailed-box'>
                    <div className='col-xs-12 col-sm-3 col-md-3'>
                        <div className='post-thumbnail'>
                            <img src={`data:image/;base64,${data?.publisherImg}`} alt={`${data?.name}`} />
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-9 col-md-20'>
                        <div className='post-center-content'>
                            <ul>
                                <h2>{data?.name}</h2>
                                <p><strong>Biográfa:</strong> {data?.about} </p>
                            </ul>
                        </div>
                    </div>
                    <div className='clearfix'></div>
                </div >
            </article>
        </>
    );
}

export default DetalheEditora;