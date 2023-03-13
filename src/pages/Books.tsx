import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../components/Book'
import { getBooksApi } from '../redux/books/books'

const Books = () => {
  const books = useSelector((state: any) => state.booksReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooksApi() as any)
  }, [])

  return (
    <div className="flex h-screen">
      <h2>Catálogo de libros</h2>
      {books.map((book: any) => (
        <Book key={book.item_id} book={book} />
      ))}
      <div className="Line-2" />
    </div>
  )
}

export default Books
