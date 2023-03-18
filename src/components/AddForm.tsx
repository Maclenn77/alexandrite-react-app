import React, { useState } from 'react';
import { useCreateBookMutation } from '../api/booksApi/booksApi';
import { addBookQueryParams } from '../shared/utils';

const Form = () => {
    const [key, setTitle] = useState('');
    const [query, setCategory] = useState('');
    const keyChange = (e: any) => { setTitle(e.target.value); };
    const queryChange = (e: any) => { setCategory(e.target.value); };
    const [createBook] = useCreateBookMutation();
    const submitBook = () => {
        createBook(addBookQueryParams(key, query))
    }

    return (
        <form className="add-form">
            <h2 className="add-Title">Añade un nuevo libro</h2>
            <div className="input-area">
                <input type="text" value={key} onChange={keyChange} placeholder="ISBN, ISSN, etc" id="key" />
                <input type="number" value={query} onChange={queryChange} placeholder="012981772313" id="query" />
                <button type="submit" onClick={submitBook}><span className="ADD-BOOK">Añadir</span></button>
            </div>
        </form>
    );
};

export default Form;