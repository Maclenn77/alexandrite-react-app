import {
  postBook,
  deleteBook,
  getBooksList,
  postBulkBooks,
} from "./api_handler";

const ADD_BOOK = "bookstore/books/ADD_BOOK";
const ADD_MANY_BOOKS = "bookstore/books/ADD_MANY_BOOKS";
const REMOVE_BOOK = "bookstore/books/REMOVE_BOOK";
const GET_BOOKS = "bookstore/books/GET_BOOKS";

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addManyBooks = (payload) => ({
  type: ADD_MANY_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const addManyBooksApi = (books) => async (dispatch) => {
    const newBulkBooks = await postBulkBooks(books);
    const newBookList = []
    Object.keys(newBulkBooks).forEach((id) => {
        newBookList.push({
            item_id: books[id].book_id,
            title: books[id].title,
            authors: books[id].authors,
            publisher: books[id].publisher,
            date: books[id].published_date,
            country: books[id].country,
            page_count: books[id].page_count,
            description: books[id].description,
            ddc: books[id].ddc,
            isbn10: books[id].isbn10,
            isbn13: books[id].isbn13,
            categories: books[id].categories,
            suggested: books[id].suggested_classifications,
        });
    });
    dispatch(getBooks(newBookList))
}

export const addBookApi = (book) => async (dispatch) => {
  await postBook(book);
  dispatch(addBook(book));
};

export const removeBookApi = (id) => async (dispatch) => {
  await deleteBook(id);
  dispatch(removeBook(id));
};

export const getBooksApi = () => async (dispatch) => {
  const books = await getBooksList();
  const booklist = [];
  Object.keys(books).forEach((id) => {
    booklist.push({
      item_id: books[id].book_id,
      title: books[id].title,
      authors: books[id].authors,
      publisher: books[id].publisher,
      date: books[id].published_date,
      country: books[id].country,
      page_count: books[id].page_count,
      description: books[id].description,
      ddc: books[id].ddc,
      isbn10: books[id].isbn10,
      isbn13: books[id].isbn13,
      categories: books[id].categories,
      suggested: books[id].suggested_classifications,
    });
  });
  dispatch(getBooks(booklist));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
