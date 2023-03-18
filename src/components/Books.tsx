import React from "react";
import { useGetBooksQuery } from "../api/booksApi/booksApi";
import BulkForm from "./add_bulk_form";
import Form from "./add_form";
import Book from "./Book";

const Books = () => {
  const { data: books } = useGetBooksQuery();

  return (
    <div className="bg">
      <h2>Catálogo de libros</h2>
      <Form />
      {books?.map((book: any) => (
        <Book key={`book-${book.id}`} book={book} />
      ))}
      <div className="Line-2" />
      <BulkForm />
    </div>
  );
};

export default Books;
