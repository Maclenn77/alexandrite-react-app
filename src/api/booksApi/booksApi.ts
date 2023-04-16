import { createApi } from "@reduxjs/toolkit/query/react";
import type { BulkBooksBody } from "../../types/bookApi";
import type { IBook } from "../../types/books";
import { booksBaseQuery } from "./baseQuery";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: booksBaseQuery,
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<Array<IBook>, void>({
      query: () => "",
      providesTags: [{ type: "Book" }],
    }),
    createBook: builder.mutation<IBook, string>({
      query: (queryParams) => ({
        url: `books/create${queryParams}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Book"}]
    }),
    createBulkBooks: builder.mutation<IBook[], BulkBooksBody>({
      query: (books) => ({
        url: `books/bulk`,
        method: "POST",
        body: books
      })
    }),
    deleteBook: builder.mutation<void, string>({
      query: (bookId) => ({
        url: `books/delete?key=book_id&query=${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Book" }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useCreateBulkBooksMutation
} = booksApi;

export default booksApi;
