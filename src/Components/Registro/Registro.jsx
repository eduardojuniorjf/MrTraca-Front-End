import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import api from '../../Api.js'

function Registro() {

    const livro = useParams();
    const baseUrl = `/User`;

    const [data, setData] = useState([]);

    const [leitorSelecionado, setLeitorSelecionado] = useState({
        id: '',
        Name: '',
        Email: '',
        PhoneNumber: '',
        BookId: livro.bookId
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
                alert('USUÁRIO CADASTRADO COM SUCESSO');
                setData(data.concat(response.data));
            }).catch(error => {
                alert('CADASTRO NÃO EFETUADO');
            })
    }

    return (
        <>
            <div id='content' className='site-content'>
                <div id='primary' className='content-area'>
                    <main id='main' className='site-main'>
                        <div className='signin-main'>
                            <div className='container'>
                                <div className='woocommerce'>
                                    <div className='woocommerce-login'>
                                        <div className='company-info signin-register'>
                                            <div className='col-md-5 border-dark new-user'>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <div className='col-md-12 border-dark-center'>
                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <div className='company-detail bg-dark margin-left'>
                                                                        <div className='signin-head'>
                                                                            <h2>CONTATOS PARA TROCA</h2>
                                                                            <span className='underline left'></span>
                                                                        </div>
                                                                        <form className='login' method='post'>
                                                                            <p className='form-row input-required'>
                                                                                <input type='text' id='nome' name='Name' className='input-text' placeholder='Nome*' onChange={handleChange} />
                                                                            </p>
                                                                            <p className='form-row form-row-first input-required'>
                                                                                <input type='text' id='email' name='Email' className='input-text' placeholder='E-mail*' onChange={handleChange} />
                                                                            </p>
                                                                            <p className='form-row input-required'>
                                                                                <input type='text' id='telefone' name='PhoneNumber' className='input-text' placeholder='Telefone* SOMENTE NÚMEROS' onChange={handleChange} />
                                                                            </p>
                                                                            <div className='clear'></div>
                                                                            <Link className='btn btn-dark-gray' to='/livro' onClick={() => leitorPost()}>Cadastrar</Link>
                                                                            <div className='clear'></div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 border-dark '>
                                                <div className='row'>
                                                    <div className='col-md-15'>
                                                        <div className='company-detail bg-light margin-right'>
                                                            <div className='new-user-head'>
                                                                <p></p>
                                                                <img src="images/troca.png" alt='biblioteca' height='900' />
                                                                <span className='underline left'></span>
                                                                <p></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Registro;