import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const booksBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
  },
});
