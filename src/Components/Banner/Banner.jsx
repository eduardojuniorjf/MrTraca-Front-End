import React from 'react';

function Banner() {
    return (
        <div data-ride="carousel" classNameName="carousel slide" id="home-v1-header-carousel">
            <div className="carousel-inner">
                <div className="item active">
                    <figure>
                        <img alt="Home Slide" src="images/home.png" />
                    </figure>
                    <div className="container">
                        <div className="carousel-caption">
                            <h2>Encontrar livros, conhecer pessoas e dividir boas histórias</h2>
                            <p></p>
                            <div className="carousel-subtitle">
                            <h2>Tudo em um só lugar</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;