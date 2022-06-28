import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import Spinner from '../components/Spinner'

const Character = () => {
  let params = useParams()
  const [character, setCharacter] = useState({})
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const url = `https://futuramaapi.herokuapp.com/api/v2/characters?search=${params.charactername}`
    const getCharacter = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setCharacter(data[0])
      setLoading(false)
    }

    getCharacter()

    return () => {}
  }, [params.charactername])

  return (
    <div>
      {Loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <img
              src={character.PicUrl}
              alt={character.Name}
              className='w-full object-contain h-96'
            />
            <h2 className='text-2xl text-center mt-5 mb-5 uppercase text-amber-700 font-semibold'>
              {character.Name}
            </h2>
            <div className='flex justify-between flex-col p-5'>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>Age: </span>
                {character.Age}
              </p>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>Planet: </span>
                {character.Planet}
              </p>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>
                  Profession:{' '}
                </span>
                {character.Profession}
              </p>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>Status: </span>
                {character.Status}
              </p>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>
                  First Apperance:{' '}
                </span>
                {character.FirstAppearance}
              </p>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>Species: </span>
                {character.Species}
              </p>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>
                  Relatives:{' '}
                </span>
                {character.Relatives}
              </p>
              <p className='pb-5'>
                <span className='text-amber-500 font-semibold'>
                  Voiced By:{' '}
                </span>
                {character.VoicedBy}
              </p>
            </div>
          </div>
          <div className='text-amber-500 sticky bottom-0 py-2 px-4 bg-white text-xl'>
            <Link
              to='/futurama/characters'
              className='flex items-center font-semibold'
            >
              <FaAngleLeft className='text-3xl' />
              Back
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Character
