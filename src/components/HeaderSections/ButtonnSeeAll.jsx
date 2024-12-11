import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ButtonSeeAll = () => {
  return (
    <Link to='/movies'>
      <button type='button' className='flex items-center group justify-center gap-2 font-medium text-lg hover:border-b border-redP transition-all duration-150 ease-in-out'>
        Ver mas  <FaArrowRight className='transition-all duration-300 ease-in-out group-hover:text-redP ' />
      </button>
    </Link>
  )
}

export default ButtonSeeAll
