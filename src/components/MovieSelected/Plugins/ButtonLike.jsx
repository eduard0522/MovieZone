import { useContext } from 'react'

import { BiSolidLike, BiSolidDislike } from 'react-icons/bi'

import { ContextVideo } from '../../Contexts/contextVideo'

const ButtonLike = ({ text, icon }) => {
  const { movieSelected } = useContext(ContextVideo)
  const isLike = icon === 'like'
  return (
    <div className='flex flex-col items-center text-sm text-blackP-100 cursor-pointer group'>
      {isLike ? <BiSolidLike className={`text-xl font-bold group-hover:text-blueP ${movieSelected.like ? 'text-blueP' : 'text-whiteP'}`} /> : <BiSolidDislike className={`text-xl font-bold group-hover:text-blueP ${movieSelected.like ? 'text-whiteP' : 'text-BlueP'}`} />}
      <span> {text} </span>
    </div>
  )
}

export default ButtonLike
