import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../Api.js'

function DetalheAutor() {
    
    const autor = useParams();
    const [data, setData] = useState();
    const autorGet = () => {
        api.get(`/Author/${autor.authorId}`)
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        autorGet();
    },[])

    return (
        <>
            <article>
                <div className='detailed-box'>
                    <div className='col-xs-12 col-sm-3 col-md-3'>
                        <div className='post-thumbnail'>
                            <img src={`data:image/;base64,${data?.authorImg}`} alt={`${data?.name}`}/>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-9 col-md-20'>
                        <div className='post-center-content'>
                            <ul>
                                <h2>{data?.name}</h2>
                                <p align='justify'><strong>Biográfia:</strong> {data?.about} </p>
                            </ul>
                        </div>
                    </div>
                    <div className='clearfix'></div>
                </div >
            </article>
        </>
    );
}

export default DetalheAutor;
