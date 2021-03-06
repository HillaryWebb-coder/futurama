import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../components/Spinner'
import Button from '../components/Button'

const Characters = () => {
  const [Loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  const url = 'https://futuramaapi.herokuapp.com/api/v2/characters'

  const getCharacters = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCharacters(data)
    setLoading(false)
  }

  useEffect(() => {
    getCharacters()

    return () => {
      // setLoading(false)
    }
  }, [])

  return (
    <div>
      {Loading ? (
        <Spinner />
      ) : (
        <div className='grid md:grid-cols-3'>
          {characters.map(character => {
            return (
              <div
                key={character.Name}
                className='m-5 rounded-lg overflow-hidden shadow-lg flex flex-col justify-between'
              >
                <img
                  src={character.PicUrl}
                  alt={character.Name}
                  className='mx-auto mb-5 h-56 w-full object-contain'
                />
                <div className='p-5'>
                  <h4>
                    <span className='text-amber-500'>Name: </span>
                    {character.Name}
                  </h4>
                  <div className='flex justify-between flex-col'>
                    <p>
                      <span className='text-amber-500'>Age: </span>
                      {character.Age}
                    </p>
                    <p>
                      <span className='text-amber-500'>Planet: </span>
                      {character.Planet}
                    </p>
                    <p>
                      <span className='text-amber-500'>Profession: </span>
                      {character.Profession}
                    </p>
                    <p>
                      <span className='text-amber-500'>Status: </span>
                      {character.Status}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/characters/${character.Name}`}
                  className='w-3/4 mx-auto'
                >
                  <Button type='primary'>Read More</Button>
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Characters
