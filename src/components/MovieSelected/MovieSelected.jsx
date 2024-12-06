import { useContext } from 'react'

import { TbPointFilled, TbClockPlus } from 'react-icons/tb'
import { FaCirclePlay } from 'react-icons/fa6'

import { ContextVideo } from '../Contexts/contextVideo'
import Title from '../HeaderSections/Title'
import { RecomendedMovies } from './RecomendedMovies'
import FilterByGenres from '../Sections/FilteredByGenres'
import ButtonLike from './Plugins/ButtonLike'

export const MovieInfo = () => {
  const { movieSelected } = useContext(ContextVideo)
  return (
    <>
      <section className='flex w-full gap-8 justify-between'>
        <section className='w-4/6'>
          <div className='rounded-md overflow-hidden mb-4 relative'>
            <img src={movieSelected.banner} alt='Banner de película' />
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-blackP-50 flex items-center justify-center '> <FaCirclePlay className='bg-whiteP rounded-full text-redP cursor-pointer text-6xl hover:animate-resizeButton' /> </div>
          </div>
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
