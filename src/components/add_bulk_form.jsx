import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addManyBooksApi } from '../redux/books/books';

const BulkForm = () => {
    const [key, setKey] = useState('');
    const [file, setFile] = useState('');
    const keyChange = (e) => { setKey(e.target.value); };
    const fileChange = (e) => { setFile(e.target.files[0]); };

    const dispatch = useDispatch();
    const submitBulkBooksToStore = (e) => {
        e.preventDefault();
        const Books = {
            key: key,
            data: file
        };
        dispatch(addManyBooksApi(Books));
    };
    return (
        <form className="add-form">
            <h2 className="add-Title">ADD NEW BOOK</h2>
            <div className="input-area">
                <input type="text" value={key} onChange={keyChange} placeholder="Choice ISBN, ISSN, etc" id="key" />
                <input type="file" onChange={fileChange} placeholder="File" id="file" />
                <button type="submit" onClick={submitBulkBooksToStore}><span className="ADD-BOOKS">ADD BOOKS</span></button>
            </div>
        </form>
    );
};

export default BulkForm;