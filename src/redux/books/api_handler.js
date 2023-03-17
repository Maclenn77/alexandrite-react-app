const apiURL = new URL("http://localhost:3000/");
const queryFormat = (key, query) => `?key=${key}&query=${query}`;

/* Create a book with data from Google API or OCLC API */
export const postBook = async (key, query) => {
  const data = await fetch(queryFormat(key, query), {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());

  return data;
};

/* Create books with data from Google API or OCLC API */
/* Send an array with codes and then retrieves the answer */
export const postBulkBooks = async (books) => {
  const data = {
    key: books.key,
    data: books.data,
  };

  const request = await fetch(`${apiURL}bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  return request;
};

/* Get a a list of books from the server */
export const getBooksList = async () => {
  const data = await fetch(apiURL).then((response) => response.json());
  return data;
};

/* Delete books from the server */
export const deleteBook = async (query) => {
  const key = "book_id";

  const response = await fetch(
    `${apiURL}books/delete${queryFormat(key, query)}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json; charset=UTF-8",
      },
    }
  ).then((response) => response.json());

  return response;
};

export default { postBook, deleteBook, getBooksList, postBulkBooks };
