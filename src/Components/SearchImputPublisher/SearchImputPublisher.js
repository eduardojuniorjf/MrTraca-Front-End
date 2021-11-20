import React from "react";

const SearchImputPublisher = ({ value, onChange }) => {
    function handlerChange(event) {
        onChange(event.target.value);
    }

    return (
        <input
            className='form-control'
            placeholder='Buscar Editora'
            type='search'
            value={value}
            onChange={handlerChange}
        />
    );
}

export default SearchImputPublisher;