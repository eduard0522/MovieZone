import { useContext, useEffect, useState } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'

import ContainerSections from './Plugins/ContainerSections'

import Movie from '../Movie/CardMovie'

const FilterByGenres = () => {
  const { movieList } = useContext(ContextVideo)
  const [genres, setGenres] = useState({})
  const groupByGenre = (list) => {
    const groups = list.reduce((acc, movie) => {
      movie.genre.forEach((genre) => {
        if (!acc[genre]) {
          acc[genre] = []
        }
        acc[genre].push(movie)
      })
      return acc
    }, {})
    return groups
  }

  useEffect(() => {
    if (movieList.length > 0) {
      setGenres(groupByGenre(movieList))
    }
    console.log(genres)
  }, [movieList])

  return (
    <>
      {Object.keys(genres).map((genre) => {
        return (
          <ContainerSections key={genre} title={genre}>
            {genres[genre].map((movie) => (
              <Movie key={movie.title} movie={movie} />
            ))}
          </ContainerSections>
        )
      })}
    </>
  )
}

export default FilterByGenres
