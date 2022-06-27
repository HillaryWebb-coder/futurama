import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Characters from './pages/Characters'
import Character from './pages/Character'
import Home from './pages/Home'

function App () {
  const [Loading, setLoading] = useState(true)
  const [CharactersList, setCharactersList] = useState([])

  const url = 'https://futuramaapi.herokuapp.com/api/v2/characters'

  const getCharacters = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCharactersList(data)
    setLoading(false)
  }

  useEffect(() => {
    getCharacters()

    return () => {
      // setLoading(false)
    }
  }, [])

  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/characters'
            element={
              <Characters loading={Loading} characters={CharactersList} />
            }
          />
          <Route
            path='/characters/:charactername'
            element={<Character characters={CharactersList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
