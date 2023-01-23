import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksApi } from "../redux/books/books";
import Form from "./add_form";
import Book from "./book";

const Books = () => {
  const books = useSelector((state: any) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksApi() as any);
  }, []);

  return (
    <div className="bg">
      <h2>Catálogo de libros</h2>
      <Form />
      {books.map((book: any) => (
        <Book key={book.item_id} book={book} />
      ))}
      <div className="Line-2" />
    </div>
  );
};

export default Books;
