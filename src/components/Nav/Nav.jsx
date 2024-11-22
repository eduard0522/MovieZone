import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { TbMovie } from 'react-icons/tb'
import { BiCameraMovie } from 'react-icons/bi'
import { GrHomeRounded } from 'react-icons/gr'
import { IoSearch } from 'react-icons/io5'

import { contextForms } from '../Contexts/FormContext'
import { GeneralContext } from '../Contexts/GeneralContext'
import Logo from '../../assets/logo.png'
import ButtonCategory from './ButtonCategory'
import ButtonLogin from '../Buttons/Login'
import { UserPanel } from './UserPanel'

const Nav = () => {
  const { isAuthenticated } = useContext(contextForms)
  const { openSideNav, setOpenSideNav } = useContext(GeneralContext)
  const changeStateSideNav = () => {
    setOpenSideNav(!openSideNav)
  }
  return (
    <section className='px-8 py-4 flex justify-between w-full items-center z-20'>
      <div className='flex gap-8 items-center w-4/5 justify-start'>
        <div className='w-48 cursor-pointer' onClick={changeStateSideNav}>
          <img src={Logo} alt='Logo MovieZone' />
        </div>
        <nav className='flex gap-8 text-blackP-100'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-blackP-100'}
          >
            <ButtonCategory category='Home' icon={<GrHomeRounded />} />
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-blackP-100'}
          >
            <ButtonCategory category='Movies' icon={<TbMovie />} />
          </NavLink>

          <NavLink
            to='/series'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-blackP-100'}
          >
            <ButtonCategory category='Series' icon={<BiCameraMovie />} />
          </NavLink>
        </nav>
        <div className='flex items-center'>
          <input
            type='text'
            className=' w-96 bg-transparent border-2  border-blackP-100 rounded-lg px-4 py-1'
          />
          <IoSearch className=' -translate-x-6' />
        </div>
      </div>
      <div className='rounded-full'>
        {isAuthenticated ? <UserPanel /> : (<ButtonLogin />)}
      </div>
    </section>
  )
}

export default Nav
