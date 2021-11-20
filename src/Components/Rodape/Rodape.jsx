import React from 'react';
import { Link } from 'react-router-dom';

function Rodape() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    MR. TRAÇA
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Páginas</h2>
                        <Link to='/livro'>Livros</Link>
                        <Link to='/autor'>Autores</Link>
                        <Link to='/editora'>Editoras</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Categorias</h2>
                        <Link to='/'>Aventura</Link>
                        <Link to='/'>Romance & Teens</Link>
                        <Link to='/'>Terror</Link>
                        <Link to='/'>Literatura Nacional</Link>
                        <Link to='/'>Clássicos</Link>
                        <Link to='/'>HQ'S</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Redes sociais</h2>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer'>Facebook</a>
                        <a href='https://twitter.com' target='_blank' rel='noreferrer'>Twitter</a>
                        <a href='https://google.com' target='_blank' rel='noreferrer'>Google</a>
                        <a href='https://instagram.com' target='_blank' rel='noreferrer'>Instagram</a>
                        <a href='https://linkedin.com' target='_blank' rel='noreferrer'>LinkedIn</a>
                        <a href='https://youtube.com' target='_blank' rel='noreferrer'>Youtube</a>
                    </div>
                </div>
                <div>
                    <p className='frase'>"Os verdadeiros analfabetos são os que aprenderam a ler e não leem. " Mario Quintana</p>
                </div>
            </div>

        </div>
    );
}

export default Rodape;