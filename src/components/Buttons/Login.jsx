import { useContext } from 'react'
import { ContextVideo } from '../Contexts/contextVideo'

const ButtonLogin = () => {
  const { setOpenFormLogin, openFormLogin } = useContext(ContextVideo)
  return (
    <div
      className=' bg-redP py-2 px-6 rounded-sm cursor-pointer hover:bg-greenP'
      onClick={() => setOpenFormLogin(!openFormLogin)}
    >
      <span className='font-semibold'> Login </span>
    </div>
  )
}

export default ButtonLogin
