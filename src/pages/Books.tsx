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
    <div className="flex justify-center ">
      <div className='mt-24 relative overflow-x-auto'>
        <table className="w-full text-sm text-left justify-center">
          <thead className='text-xs text-gray-700 uppercase border-b'>
            <tr>
              <th scope='col' className='px-6 py-3'>ID</th>
              <th scope='col' className='px-6 py-3'>Título</th>
              <th scope='col' className='px-6 py-3'>Autor/es</th>
              <th scope='col' className='px-6 py-3'>Descripción</th>
              <th scope='col' className='px-6 py-3'>Editorial</th>
              <th scope='col' className='px-6 py-3'>Año Edición</th>
              <th scope='col' className='px-6 py-3'>Páginas</th>
              <th scope='col' className='px-6 py-3'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: any) => (
              <Book key={book.item_id} book={book} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="Line-2" />
    </div>
  )
}

export default Books
