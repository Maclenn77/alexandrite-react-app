import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from './pages/Books'
import Home from './pages/Home'
import Layout from './layouts/Layout'

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
