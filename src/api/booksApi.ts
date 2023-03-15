import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getBooks: builder.query<Array<{}>, void>({
      query: () => "",
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;

export default booksApi;
