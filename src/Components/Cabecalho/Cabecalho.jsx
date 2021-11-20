import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <header id='header' className='navbar-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <nav className='navbar navbar-default'>
                        <div className='menu-wrap'>
                            <div className='navbar-header'>
                                <div className='navbar-brand'>
                                    <h1>
                                        <Link to='/' className='navbar-logo' ><img src='images/logo_v1.png' height='10' width='110' alt='MR. TRAÇA' /> <i class='fab fa-typo3' /></Link>
                                    </h1>
                                </div>
                            </div>
                            <div className='navbar-collapse collapse hidden-sm hidden-xs'>
                                <ul className='nav navbar-nav'>
                                    <li className='dropdown active'>
                                        <Link to='/' className='dropdown-toggle disabled' >Home</Link>
                                    </li>
                                    <li className='dropdown'>
                                        <Link to='/livro' className='dropdown-toggle disabled' >Livros</Link>
                                    </li>
                                    <li className='dropdown'>
                                        <Link to='/autor' className='dropdown-toggle disabled' >Autores</Link>
                                    </li>
                                    <li className='dropdown'>
                                        <Link to='/editora' className='dropdown-toggle disabled' >Editoras</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='mobile-menu hidden-md hidden-lg'>
                                <AnchorLink href='#mobile-menu'><i className='fa fa-navicon'></i></AnchorLink>
                                <div id='mobile-menu'>
                                    <ul>
                                        <li className='mobile-title'>
                                            <h4>Menu</h4>
                                            <AnchorLink href='#' className='close'></AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink href='index.html'>Home</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink href='news-events-list-view.html'>Detalhes do Livro</AnchorLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default Cabecalho;