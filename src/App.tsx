import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./components/books";

const App = () => (
  <Router>
    <div className="bg-slate-500">
      <h1 className="text-3xl p-10">Biblioteca Comunitaria "La Ceiba"</h1>
      <Routes>
        <Route path="/catalogo" element={<Books />} />
      </Routes>
    </div>
  </Router>
);

export default App;
