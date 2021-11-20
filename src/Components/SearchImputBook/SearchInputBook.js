import React from "react";

const SearchInputBook = ({ value, onChange }) => {
    function handlerChange(event) {
        onChange(event.target.value);
    }

    return (
        <input
            className='form-control'
            placeholder='Buscar Livro'
            type='search'
            value={value}
            onChange={handlerChange}
        />
    );
}

export default SearchInputBook;