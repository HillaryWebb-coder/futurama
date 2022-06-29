import './assets/main.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Characters from './pages/Characters'
import Home from './pages/Home'
import Character from './pages/Character'

function App () {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:charactername' element={<Character />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
