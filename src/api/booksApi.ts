import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../types/books";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getBooks: builder.query<Array<IBook>, void>({
      query: () => "",
    }),
    createBook: builder.mutation<IBook, string>({
      query: (queryParams) => ({
        url: `books/create${queryParams}`,
        method: "POST",
      }),
    }),
    //TODO: missing migrate the following api calls to here: delete, createBulkBooks
  }),
});

export const { useGetBooksQuery, useCreateBookMutation } = booksApi;

export default booksApi;
