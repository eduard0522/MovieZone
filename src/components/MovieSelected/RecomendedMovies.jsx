import { useContext } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'

import Movie from '../Movie/CardMovie'

export const RecomendedMovies = () => {
  const { movieList } = useContext(ContextVideo)
  return (
    <div className='col-span-4 overflow-auto max-h-[90vh'>
      <h2 className='pb-2 md:pb-3 2xl:pb-4 3xl:pb-5  font-bold text-lg md:text-2xl'> Recomendadas para tí</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 auto-rows-fr gap-4'>
        {movieList.map((movie) => <Movie key={movie.title} movie={movie} />)}
      </div>
    </div>
  )
}
