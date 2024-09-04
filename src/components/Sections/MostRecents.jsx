import { useContext } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'
import { Link } from 'react-router-dom'

import Header from '../HeaderSections/Header'
import Movie from '../Movie/CardMovie'


const MostRecents = () => {

  const {movieList, setMovieSelected } = useContext(ContextVideo);
  const handleOnclick = (movie) => {
    setMovieSelected(movie)
  }
  return (
    <section className='my-4'>
      <Header title= " Most Recents " />

      <div className='flex gap-4 max-w-[100vw] overflow-hidden'>
        {movieList.map((movie) => {
          return (
            <Link
              onClick={() => {
                handleOnclick(movie)
              }}
            >
              <Movie movie={movie} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default MostRecents
