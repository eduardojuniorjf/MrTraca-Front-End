import React, { useEffect, useState } from 'react';
import api from '../../Api.js'
import { useParams } from 'react-router';

function TabelaEmprestimo() {

    const emprestimo = useParams();
    const baseUrl = `/User/${emprestimo.bookId}/BookExchange`;
    const [usuarios, setComentarios] = useState([{}]);

    useEffect(() => {

        api.get(baseUrl)
            .then(res => {
                const dados = res.data
                setComentarios(dados)
            })
    }, []);

    return (
        <>
            <div className='table-tabs' id='responsiveTabs'>
                <div className='tab-content'>
                    <div id='sectionA' >
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Usuário</th>
                                    <th>Contato para troca</th>
                                </tr>
                            </thead>
                            <tbody>{usuarios.map(usuario =>
                                <tr>
                                    <td><h3>{usuario.name}</h3></td>
                                    <td><a href={`https://api.whatsapp.com/send?phone=55${usuario.phoneNumber}`}
                                        className='navbar-logo' target='_blank' rel='noreferrer'  ><img src='images/whatsapp.png' alt='Whatsapp' />
                                    </a><a href={`mailto:${usuario.email}`} className='navbar-logo' ><img src='images/email.png' alt='Whatsapp' /></a>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}


export default TabelaEmprestimo;
