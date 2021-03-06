import { useState } from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='md:w-3/4'>
      <div className='hidden md:flex justify-between items-center'>
        <ul className='flex justify-between text-secondary text-xl font-semibold'>
          <li className='p-3 text-center '>
            <Link to='/characters'>Characters</Link>
          </li>
          <li className='p-3 text-center '>Quotes</li>
        </ul>
        <Search />
      </div>

      {showMenu ? (
        <ul className='w-full p-5 pt-20 h-screen fixed top-0 left-0 z-50 backdrop-blur-lg bg-amber-800/80'>
          <svg
            className='w-9 h-9 ml-auto mr-10 mb-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              setShowMenu(false)
            }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
          <li className='p-3 text-center text-white text-xl font-semibold'>
            <Link to='/characters'>Characters</Link>
          </li>
          <li className='p-3 text-center text-white text-xl font-semibold'>
            Quotes
          </li>
          <Search />
        </ul>
      ) : (
        <svg
          className='w-6 h-6 md:hidden'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            setShowMenu(true)
          }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      )}
    </nav>
  )
}

export default Menu
