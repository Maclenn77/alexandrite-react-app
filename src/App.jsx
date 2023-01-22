import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/books';

const App = () => (
    <Router>
      <div className="bg">
        <h1>Biblioteca Comunitaria "La Ceiba"</h1>
        <Routes>
          <Route exact path="/catalogo" element={<Books />} />
        </Routes>
      </div>
    </Router>
);

export default App;