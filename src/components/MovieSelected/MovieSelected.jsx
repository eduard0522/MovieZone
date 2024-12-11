import { useContext } from 'react'

import { TbPointFilled, TbClockPlus } from 'react-icons/tb'

import { ContextVideo } from '../Contexts/contextVideo'
import Title from '../HeaderSections/Title'
import { RecomendedMovies } from './RecomendedMovies'
import BannerMovieSelected from './Plugins/Banner'
import FilterByGenres from '../Sections/FilteredByGenres'
import ButtonLike from './Plugins/ButtonLike'

export const MovieInfo = () => {
  const { movieSelected } = useContext(ContextVideo)
  return (
    <>
      <section className='grid grid-cols-12 w-full gap-8'>
        <section className='col-span-8'>
          <BannerMovieSelected />
          <div className='my8 grid lg-grid-cols-12 flex-col gap-4'>
            <div className='flex justify-between'>
              <div>
                <Title title={movieSelected.title} />
                <p
                  className='flex items-center text-md font-semibold  mb-2'
                >
                  {movieSelected.release_year} <span className='text-sm'> <TbPointFilled /> </span> {movieSelected.duration[0]} h - {movieSelected.duration[1]} min
                </p>

                {movieSelected.genre.map(genre =>
                  <span key={genre} className='pr-2 text-blackP-100'> {genre} </span>
                )}
              </div>
              <div className='flex gap-4'>
                <div className='flex flex-col items-center text-sm text-blackP-100 cursor-pointer group '>
                  <TbClockPlus className='text-xl font-bold group-hover:text-blueP' />
                  <span>Ver luego</span>
                </div>
                <ButtonLike text='Me gusta' icon='like' />
                <ButtonLike text='No me gusta' icon='dislike' />
              </div>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-2'> Descripción </h3>
              <p className='text-blackP-100 '>{movieSelected.description}</p>
            </div>
          </div>
        </section>
        <RecomendedMovies />
      </section>
      <FilterByGenres />
    </>
  )
}
