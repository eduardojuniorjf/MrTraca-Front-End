import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Mark from './Mark'
import { Link } from 'react-router-dom';
import './Item.scss'

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <Link to={`/livrodetalhe/${movie.bookId}`} className='dropdown-toggle disabled'> 
          <img src={`data:image/;base64,${movie.bookCover}`} alt="" /> </Link>
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
