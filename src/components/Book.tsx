import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { removeBookApi } from "../redux/books/books";
import { IBook } from "../types/books";

interface IBookComponent {
  book: IBook;
}

const Book: FC<IBookComponent> = ({ book }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi(book.id) as any);
  };

  return (
    <div className="Lesson-Panel">
      <div className="book-info">
        <h3 className="title">{book.title}</h3>
        <div>
          {book.authors.map((author, index) => (
            <div className="author" key={`author-${index}`}>
              {author}{" "}
            </div>
          ))}
        </div>
        <div className="publisher">Editorial: {book.publisher}</div>
        <div className="published_date">
          Fecha de publicación: {book.publishDate}
        </div>
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
          <div className="source">{book.dataSource}</div>
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
