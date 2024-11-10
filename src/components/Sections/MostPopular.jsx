import { useContext } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'
import { Link } from 'react-router-dom'

import Movie from '../Movie/CardMovie'
import Header from '../HeaderSections/Header'

const MostPopular = () => {
  const { movieList, setMovieSelected } = useContext(ContextVideo)
  const ratingRequired = 8
  const handleOnclick = (movie) => {
    setMovieSelected(movie)
  }
  return (
    <section>
      <Header title='Most Popular' />
      <div className='flex gap-4 max-w-[100vw] overflow-hidden'>
        {movieList.map((movie) => {
          if (movie.rating >= ratingRequired) {
            return (
              <Link
                key={movie.title}
                onClick={() => {
                  handleOnclick(movie)
                }}
              >
                <Movie movie={movie} />
              </Link>
            )
          } else {
            return null
          }
        })}

      </div>
    </section>
  )
}

export default MostPopular
