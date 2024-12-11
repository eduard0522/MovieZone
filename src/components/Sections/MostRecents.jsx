import { useContext } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'

import Movie from '../Movie/CardMovie'
import ContainerSections from './Plugins/ContainerSections'

const MostRecents = () => {
  const { movieList } = useContext(ContextVideo)

  return (
    <ContainerSections title='Más Recientes'>
      {movieList.map((movie) => {
        if (movie.release_year >= 2018) {
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

export default MostRecents
