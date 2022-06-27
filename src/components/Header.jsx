import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {
  const location = useLocation()

  console.log(location)
  return (
    <header className='sticky flex items-center justify-between p-8 shadow-sm top-0 bg-white backdrop-blur z-50'>
      <h1 className='text-2xl uppercase font-semibold text-amber-600'>
        <Link to='/'>Futurama Wiki</Link>
      </h1>
      <Menu />
    </header>
  )
}

export default Header
