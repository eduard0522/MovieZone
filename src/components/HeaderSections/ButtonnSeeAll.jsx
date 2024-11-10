import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ButtonSeeAll = () => {
  return (
    <Link to='/movies'>
      <button type='button' className='flex items-center justify-center gap-2 font-medium text-xl hover:text-redP'>
        See All  <FaArrowRight className='text-redP transition-all ' />
      </button>
    </Link>
  )
}

export default ButtonSeeAll
