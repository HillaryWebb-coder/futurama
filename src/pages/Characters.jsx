import { Link } from 'react-router-dom'

const Characters = ({ loading, characters }) => {
  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          {characters.map(character => {
            return (
              <div key={character.Name} className='m-5 shadow-md p-5'>
                <img
                  src={character.PicUrl}
                  alt={character.Name}
                  className='mx-auto mb-5'
                />
                <div>
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
                <button className='btn-primary'>
                  <Link to={`/character/${character.Name}`}>Read More</Link>
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Characters
