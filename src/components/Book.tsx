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
    <tr>
        <td className="">{book.id}</td>
        <td>{book.title}</td>
        <td>
          {book.authors.map((author) => (
            <div className="author">{author} </div>
          ))}
        </td>
        <td>{book.description}</td>
        <td>{book.publisher}</td>
        <td>{book.publish_date}</td>
        <td>{book.page_count}</td>
        <td>
      <button type="button" className="actions" onClick={removeBookFromStore}>
        Remove
      </button>
      <button type="button" className="actions">
        | Edit
      </button>
        </td>
        
        
    </tr>
    
  );
};

export default Book;
