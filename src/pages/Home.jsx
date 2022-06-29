import { Link } from 'react-router-dom'
import FuturamaImage from '../assets/futurama.jpg'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='bg-amber-200 flex flex-col-reverse md:flex-row w-full items-center'>
      <div className='md:w-1/2 p-5'>
        <h1 className='text-3xl font-bold text-secondary'>
          Futurama TV Series
        </h1>
        <p className='p-4 text-amber-900'>Wiki Created by Fan</p>
        <div className='text-lg md:flex gap-5'>
          <Button type='secondary'>
            <Link to='/characters'>Characters</Link>
          </Button>
          <Button type='secondary'>
            <Link to='/quotes'>Quotes</Link>
          </Button>
        </div>
      </div>
      <img src={FuturamaImage} alt='Futurama' className='md:w-1/2' />
    </div>
  )
}

export default Home
