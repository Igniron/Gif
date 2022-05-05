import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('');

    const cambioValor = (e)=>
    {
        setinputValue(e.target.value);
    }

    const submit = (e)=>
    {
        e.preventDefault();
        if(inputValue.trim().length > 0)
        {
            setCategorias(c => [inputValue, ...c]);
            setinputValue('');
        }
        
    }

  return (
    <form onSubmit={submit}>
        <input
            placeholder='Buscar Gif'
            type = "text"
            value = {inputValue}
            onChange = {cambioValor}
        />
    </form>
  )
}

export default AddCategory

AddCategory.propTypes = 
{
    setCategorias: PropTypes.func.isRequired
}