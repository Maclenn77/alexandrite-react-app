import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import Books from './pages/Books'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalogo" element={<Books />} />
      </Route>
    </Routes>
  )
}
