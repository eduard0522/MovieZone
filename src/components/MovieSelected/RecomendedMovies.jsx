import { useContext } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'

import Movie from '../Movie/CardMovie'

export const RecomendedMovies = () => {
  const { movieList } = useContext(ContextVideo)
  return (
    <div className='w-2/6 max-h-[80vh] overflow-hidden'>
      <h2 className='pb-8 font-bold text-lg'> Recomendadas para tí</h2>
      <div className='flex flex-wrap gap-4 justify-start'>
        {movieList.map((movie) => <Movie key={movie.title} movie={movie} />)}
      </div>
    </div>
  )
}
