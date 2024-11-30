import { useContext } from 'react'

import { AiFillAlert } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'

import { GeneralContext } from '../Contexts/GeneralContext'

export const LogoutModal = ({ setModal }) => {
  const { logout } = useContext(GeneralContext)
  const handleClickLogout = () => {
    logout()
    setModal()
  }
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 bg-[#00000097]  flex justify-center items-center '>
      <div className=' flex flex-col justify-between gap-3 w-96 h-60 bg-whiteP text-center p-4 rounded-md relative'>
        <IoClose className='absolute top-1 right-1 text-blackP text-2xl cursor-pointer font-semibold hover:text-redP' onClick={setModal} />
        <AiFillAlert className='text-6xl text-redP text-center m-auto' />
        <h2 className='text-blackP  text-2xl font-bold'> Cerrar Sesión </h2>
        <p className='text-blackP'> ¿ Estas seguro que deseas cerrar esta sesión ?</p>
        <div className='flex justify-center gap-4'>
          <button
            className='bg-blackP hover:bg-redPDark text-whiteP font-bold py-2 w-1/3 rounded-md hover:bg-redP'
            onClick={handleClickLogout}
          > Cerrar
          </button>

          <button
            className='bg-blackP hover:bg-bluePDark text-whiteP font-bold py-2 w-1/3 rounded-md hover:bg-greenP'
            onClick={setModal}
          > Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
