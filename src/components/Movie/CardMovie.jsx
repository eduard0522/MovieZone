import { useContext } from 'react'

import { ContextVideo } from '../Contexts/contextVideo'

const Movie = ({ movie }) => {
  const { setMovieSelected } = useContext(ContextVideo)
  const updateMovieSelected = (movie) => {
    setMovieSelected(movie)
  }
  return (
    <div className='relative overflow-hidden cursor-pointer hover:scale-105 transition-all' key={movie.title} onClick={() => updateMovieSelected(movie)}>
      <img
        src={movie.poster} className='opacity-0 transition-opacity duration-1000 ease-in-out'
        alt='Imagen de la película'
        onLoad={(e) => e.target.classList.add('opacity-100')}
      />
      <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end'>
        <h5 className='mb-2 text-sm  2xl:text-lg font-normal px-1 line-clamp-1'>{movie.title} </h5>
      </div>
    </div>
  )
}
export default Movie
