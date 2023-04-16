import React, { useState } from 'react';
import { useCreateBulkBooksMutation } from '../api/booksApi/booksApi';

const BulkForm = () => {
    const [key, setKey] = useState('');
    const [file, setFile] = useState('');
    const keyChange = (e: any) => { setKey(e.target.value); };
    const fileChange = (e: any) => { setFile(e.target.files[0]); };


    const [createBulkBooks] = useCreateBulkBooksMutation();

    const handleSubmit = () => {
        const body = {
            key,
            data: file
        }
        createBulkBooks(body)
    }
    
    return (
        <form className="add-form">
            <h2 className="add-Title">Añade varios libros</h2>
            <div className="input-area">
                <input type="text" value={key} onChange={keyChange} placeholder="Choice ISBN, ISSN, etc" id="key" />
                <input type="file" onChange={fileChange} placeholder="File" id="file" />
                <button type="submit" onClick={handleSubmit}><span className="ADD-BOOKS">Añadir</span></button>
            </div>
        </form>
    );
};

export default BulkForm;