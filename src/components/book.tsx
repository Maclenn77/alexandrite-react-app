import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { removeBookApi } from "../redux/books/books";
import { IBookInstance } from "../types/books";

interface IBook {
  book: IBookInstance;
}

const Book: FC<IBook> = ({ book }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi(book.item_id) as any);
  };

  return (
    <div className="Lesson-Panel">
      <div className="book-info">
        <h3 className="title">{book.title}</h3>
        <div>
          {book.authors.map((author) => (
            <div className="author">{author} </div>
          ))}
          .
        </div>
        <div className="publisher">Editorial: {book.publisher}</div>
        <div className="published_date">Fecha de publicación: {book.date}</div>
        <div className="country">Paíse de origen: {book.country}</div>
        <div className="options">
          <div className="description">Resumen: {book.description}</div>
          <div className="categories">Categorías: {book.categories}</div>
        </div>
      </div>
      <div className="identifiers">
        <div className="Classifications">
          <div className="ddc">Dewey Decimal Classification: {book.ddc}</div>
        </div>
        <div className="ISBN/ISSN">
          <div className="isbn">ISBN 10: {book.isbn10}</div>
          <div className="isbn">ISBN 13: {book.isbn13}</div>
        </div>
        <div className="Data source">
          <div className="source">{book.data_source}</div>
        </div>
      </div>
      <button type="button" className="actions" onClick={removeBookFromStore}>
        Remove
      </button>
      <button type="button" className="actions">
        | Edit
      </button>
    </div>
  );
};

export default Book;
