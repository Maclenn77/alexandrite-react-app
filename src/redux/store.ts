import { configureStore } from "@reduxjs/toolkit";
import booksApi from "../api/booksApi";
import booksReducer from "./books/booksSlice";

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;
