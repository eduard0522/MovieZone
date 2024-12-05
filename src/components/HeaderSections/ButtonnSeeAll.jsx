import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ButtonSeeAll = () => {
  return (
    <Link to='/movies'>
      <button type='button' className='flex items-center group justify-center gap-2 font-medium text-lg '>
        See All  <FaArrowRight className='text-redP transition-all group-hover:text-greenP ' />
      </button>
    </Link>
  )
}

export default ButtonSeeAll
