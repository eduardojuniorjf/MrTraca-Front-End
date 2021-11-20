import React from 'react';


function Categoria() {
    return (
        <section className='category-filter section-padding'>
            <div className='container'>
                <div className='center-content'>
                    <h2 className='section-title'>Livros que a traça provou e aprovou</h2>
                    <span className='underline center'></span>
                </div>
               {/* <div className='filter-buttons'>
                    <div className='filter btn' data-filter='all'>Romance</div>
                    <div className='filter btn' data-filter='.adults'>Aventura</div>
                    <div className='filter btn' data-filter='.kids-teens'>Teens</div>
                    <div className='filter btn' data-filter='.video'>Terror</div>
                    <div className='filter btn' data-filter='.audio'>Literatura Nacional</div>
                    <div className='filter btn' data-filter='.books'>Clássicos</div>
                    <div className='filter btn' data-filter='.magazines'>HQ's</div>
                </div> */}
            </div>
            
        </section>
    );
}
export default Categoria;