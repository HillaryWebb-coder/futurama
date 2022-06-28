import { Link } from 'react-router-dom'

import Menu from './Menu'

const Header = () => {
  return (
    <header className='sticky flex items-center justify-between p-8 shadow-sm top-0 backdrop-blur-xl z-50'>
      <h1 className='text-2xl uppercase font-semibold text-amber-600'>
        <Link to='/futurama'>Futurama Wiki</Link>
      </h1>
      <Menu />
    </header>
  )
}

export default Header
