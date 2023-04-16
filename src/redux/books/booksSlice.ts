import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const booksReducer = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksReducer.reducer;
