import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import api from '../../Api.js'

function BarraLateral() {

    const [livrarias, setLivrarias] = useState([{}]);

    useEffect(() => {
        api.get(`/Bookstore`)
            .then(res => {
                const dados = res.data
                setLivrarias(dados)
            })
    },[]);

    return (
        <>
            <div className='col-md-3 col-md-pull-9'>
                <aside id='secondary' className='sidebar widget-area' data-accordion-group>
                    <div className='widget widget_related_search open' data-accordion>
                        <div className='spaceghostsearch'></div>
                        <div data-content>
                            <div data-accordion className='mesmo-tamanho'>
                                <Accordion defaultActiveKey='0'>
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header>Amigos da Traça</Accordion.Header>
                                        <Accordion.Body>
                                            <div class='widget_categories' data-content='true'>
                                                <ul>{livrarias.map(livraria =>
                                                    <li className='spaceghostfriend'><a href={`${livraria.site}`} target='_blank' rel='noreferrer'>
                                                        <img src={`data:image/;base64,${livraria.icon}`} alt={`${livraria.name}`} /></a></li>)}
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
export default BarraLateral;
