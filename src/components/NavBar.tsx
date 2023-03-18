import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full overflow-hidden">
      <div className="flex h-12 items-center justify-evenly bg-[#4C956C] p-5 text-2xl text-[#E6B1B1]">
        <div className="hover:cursor-pointer hover:text-slate-100">
          <Link to="/">La Ceiba</Link>
        </div>
        <div className="hover:cursor-pointer hover:text-slate-100">
          <Link to="/catalogo">Catálogo</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
