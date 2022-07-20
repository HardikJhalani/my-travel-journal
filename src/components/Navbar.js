import React from 'react'
import logo from '../images/globe.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <img src= {logo} />
        <h2>my travel journal</h2>
    </div>
  )
}

export default Navbar