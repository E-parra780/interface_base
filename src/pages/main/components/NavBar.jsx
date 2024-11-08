import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link className='menu-link' to={"/api"} /> Api<Link/></li>
        <li><Link className='menu-link' to={"/src/pages/nosotros/Contacto.jsx"}>Contacto</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
