import React from "react";

const SearchInputAuthor = ({ value, onChange }) => {
    function handlerChange(event) {
        onChange(event.target.value);
    }

    return (
        <input
            className='form-control'
            placeholder='Buscar Autor'
            type='search'
            value={value}
            onChange={handlerChange}
        />
    );
}

export default SearchInputAuthor;