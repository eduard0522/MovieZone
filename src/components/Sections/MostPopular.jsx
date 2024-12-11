import { useContext } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'

import Movie from '../Movie/CardMovie'
import ContainerSections from './Plugins/ContainerSections'

const MostPopular = () => {
  const { movieList } = useContext(ContextVideo)
  const ratingRequired = 8
  return (
    <ContainerSections title='Más populares'>
      {movieList.map((movie) => {
        if (movie.rating >= ratingRequired) {
          return (
            <Movie movie={movie} key={movie.title} />
          )
        } else {
          return null
        }
      })}
    </ContainerSections>
  )
}

export default MostPopular
