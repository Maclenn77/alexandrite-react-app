import { createApi } from "@reduxjs/toolkit/query/react";
import { IBook } from "../../types/books";
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
} = booksApi;

export default booksApi;
