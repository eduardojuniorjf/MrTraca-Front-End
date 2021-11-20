import React from 'react';
import { Link } from 'react-router-dom';

function CabecalhoP() {

    return (
        <header id='header-v1' className='navbar-wrapper inner-navbar-wrapper'>
            <div className='container'>
                <div className='row'>
                    <nav className='navbar navbar-default'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='navbar-header'>
                                    <div className='navbar-brand'>
                                        <h1>
                                            <Link to='/' className='navbar-logo' ><img src='images/logo_v1.png' height='10' width='110' alt='MR. TRAÇA' /> <i class='fab fa-typo3' /></Link>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className='navbar-collapse hidden-sm hidden-xs'>
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
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default CabecalhoP;