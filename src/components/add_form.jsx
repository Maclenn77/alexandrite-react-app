import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../redux/books/books';

const Form = () => {
    const [key, setTitle] = useState('');
    const [query, setCategory] = useState('');
    const keyChange = (e) => { setTitle(e.target.value); };
    const queryChange = (e) => { setCategory(e.target.value); };

    const dispatch = useDispatch();
    const submitBookToStore = (e) => {
        e.preventDefault();
        const Book = {
            key: key,
            query: query
        };
        dispatch(addBookApi(Book));
    };
    return (
        <form className="add-form">
            <h2 className="add-Title">ADD NEW BOOK</h2>
            <div className="input-area">
                <input type="text" value={key} onChange={keyChange} placeholder="Choice ISBN, ISSN, etc" id="key" />
                <input type="text" value={query} onChange={queryChange} placeholder="Value" id="query" />
                <button type="submit" onClick={submitBookToStore}><span className="ADD-BOOK">ADD BOOK</span></button>
            </div>
        </form>
    );
};

export default Form;