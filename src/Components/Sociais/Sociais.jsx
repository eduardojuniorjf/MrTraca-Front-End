import React from 'react';

function Sociais() {
    return (
        <div className='fullwidth-social-icons'>
            <div className='container-fluid'>
                <div className='row'>
                    <ul>
                        <li>
                            <a className='facebook' href='https://facebook.com' target='_blank' rel='noreferrer'>
                                <span><i className='fa fa-facebook-f'></i> <small>Facebook</small></span>
                            </a>
                        </li>
                        <li>
                            <a className='twitter' href='https://twitter.com' target='_blank' rel='noreferrer'>
                                <span><i className='fa fa-twitter'></i> <small>Twitter</small></span>
                            </a>
                        </li>
                        <li>
                            <a className='google' href='https://google.com' target='_blank' rel='noreferrer'>
                                <span><i className='fa fa-google-plus'></i> <small>Google</small></span>
                            </a>
                        </li>
                        <li>
                            <a className='rss' href='https://instagram.com' target='_blank' rel='noreferrer'>
                                <span><i className='fa fa-rss'></i> <small>Instagram</small></span>
                            </a>
                        </li>
                        <li>
                            <a className='linkedin' href='https://linkedin.com' target='_blank' rel='noreferrer'>
                                <span><i className='fa fa-linkedin'></i> <small>Linkedin</small></span>
                            </a>
                        </li>
                        <li>
                            <a className='youtube' href='https://youtube.com' target='_blank' rel='noreferrer'>
                                <span><i className='fa fa-youtube'></i> <small>Youtube</small></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Sociais;