import { useContext } from 'react'

import { FaCirclePlay } from 'react-icons/fa6'

import { ContextVideo } from '../../Contexts/contextVideo'

const BannerMovieSelected = () => {
  const { movieSelected } = useContext(ContextVideo)
  return (
    <div className='rounded-md overflow-hidden mb-4 relative'>
      <div className='aspect-video overflow-hidden'>
        <img
          src={movieSelected.banner} alt='Banner de película' className='w-full h-full transition-opacity opacity-0'
          onLoad={(e) => e.target.classList.add('opacity-100')}
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-blackP-50 flex items-center justify-center '>
          <FaCirclePlay className='bg-whiteP rounded-full text-redP cursor-pointer text-6xl hover:animate-resizeButton' />
        </div>
      </div>
    </div>
  )
}

export default BannerMovieSelected
