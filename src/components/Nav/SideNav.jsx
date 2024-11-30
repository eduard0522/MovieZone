import { useContext } from 'react'
import { GeneralContext } from '../Contexts/GeneralContext'

import { GrHomeRounded } from 'react-icons/gr'
import { TbMovie } from 'react-icons/tb'
import { BiCameraMovie, BiCategoryAlt } from 'react-icons/bi'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { PiArrowsClockwiseBold } from 'react-icons/pi'
import { RiUserSettingsLine } from 'react-icons/ri'
import { HiMiniArrowLeftStartOnRectangle } from 'react-icons/hi2'

import { UserPanel } from './UserPanel'
import { ListItem } from './ListItem'

export const SideNav = ({ setModal }) => {
  const { openSideNav } = useContext(GeneralContext)
  return (
    <section className={`min-h-[calcl(100vh-80px)] max-h-[calcl(100vh-80px)] fixed pb-8 bg-blackP flex flex-col justify-between items-left  text-blackP-100 z-10 transform transition-transform duration-700 ease-in-out ${openSideNav ? 'top-[80px] left-8 bottom-0 translate-x-0' : 'top-[80px] left-8 bottom-0 -translate-x-[200%]'}`}>
      <UserPanel />
      <nav className='flex flex-col justify-between h-3/5 list-none '>
        <ListItem content='Inicio' Icon={GrHomeRounded} link='/' />
        <ListItem content='Películas' Icon={TbMovie} link='/movies' />
        <ListItem content='Series' Icon={BiCameraMovie} link='/series' />
        <ListItem content='Catergorías ' Icon={BiCategoryAlt} link='/' />
        <ListItem content='Recientes ' Icon={FaClockRotateLeft} link='/' />
        <ListItem content='Aleatorio' Icon={PiArrowsClockwiseBold} link='/' />
      </nav>
      <div>
        <div className='flex gap-4 group mb-4 hover:text-white cursor-pointer'>
          <RiUserSettingsLine className='text-2xl group-hover:border-b-2 border-greenP pb-1 ' />
          <h2 className='text-base font-semibold'>  Perfil </h2>
        </div>

        <div className='flex gap-4 group hover:text-white cursor-pointer'>
          <HiMiniArrowLeftStartOnRectangle className='text-2xl group-hover:border-b-2 border-redP pb-1 ' />
          <button className='text-base font-semibold' onClick={setModal}> Cerrar Sesión</button>
        </div>
      </div>
    </section>
  )
}
