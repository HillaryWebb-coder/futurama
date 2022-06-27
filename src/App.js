import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Characters from './pages/Characters'
import Character from './pages/Character'
import Home from './pages/Home'

function App () {
  return (
    <div className='container mx-auto'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
