import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksApi } from '../redux/books/books';
import Book from './book';
/*  import Form from './form'; */

const Books = () => {
    const books = useSelector((state) => state.booksReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksApi());
    }, []);

    return (
        <div className="bg">
            {books.map((book) => (
                <Book key={book.item_id} book={book} />
            ))}
            <div className="Line-2" />
        </div>
    );
};

export default Books;