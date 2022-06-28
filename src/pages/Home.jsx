import { Link } from 'react-router-dom'
import FuturamaImage from '../assets/futurama.jpg'

const Home = () => {
  return (
    <div className='bg-amber-200 flex flex-col-reverse md:flex-row w-full items-center'>
      <div className='md:w-1/2 p-5'>
        <h1 className='text-3xl font-bold text-secondary'>
          Futurama TV Series
        </h1>
        <p className='p-4 text-amber-900'>Wiki Created by Fan</p>
        <div className='text-lg md:flex gap-5'>
          <button className='btn btn-secondary'>
            <Link to='/futurama/characters'>Characters</Link>
          </button>
          <button className='btn btn-secondary'>
            <Link to='/futurama/quotes'>Quotes</Link>
          </button>
        </div>
      </div>
      <img src={FuturamaImage} alt='Futurama' className='md:w-1/2' />
    </div>
  )
}

export default Home
