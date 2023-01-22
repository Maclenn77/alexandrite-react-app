import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';
/* import './books.css'; */

const Book = ({ book }) => {
    const dispatch = useDispatch();
    const removeBookFromStore = () => {
        dispatch(removeBookApi(book.item_id));
    };

    return (
        <div className="Lesson-Panel">
            <h2>Catálogo de libros</h2>
            <div className="book-info">
                <h3 className="title">{book.title}</h3>
                <p>{book.authors.map((author) => (
                    <span className="author">{author} </span>
                ))}.</p>
                <span className="publisher">Editorial: {book.publisher}</span>
                <span className="published_date">Fecha de publicación: {book.date}</span>
                <span className="country">Paíse de origen: {book.country}</span>
                <div className="options">
                    <span className="description">Resumen: {book.description}</span>
                    <span className="categories">Categorías: {book.categories}</span>
                </div>
            </div>
            <div className="identifiers">
                <div className="Classifications">
                    <span className="ddc">Dewey Decimal Classification: {book.ddc}</span>
                </div>
                <div className="ISBN/ISSN">
                    <span className="isbn">ISBN 10: {book.isbn10}</span>
                    <span className="isbn">ISBN 13: {book.isbn13}</span>
                </div>
                <div className="Data source">
                    <span className="source">{book.data_source}</span>
                </div>
            </div>
            <button type="button" className="actions" onClick={removeBookFromStore}>Remove</button>
            <span type="button" className="actions">|  Edit</span>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        item_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        categories: PropTypes.array
    }).isRequired,
};

export default Book;