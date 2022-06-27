import { useState } from 'react'

const Search = () => {
  return (
    <div className='mx-2'>
      <form className='w-full flex items-center mx-aut0 rounded-full mt-3'>
        <input
          type='text'
          name='search'
          className='w-full h-10 p-2 rounded-l-full'
        />
        <button type='submit' className='p-2 bg-amber-600 rounded-r-full'>
          <svg
            className='w-6 h-6 rotate-90 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Search
