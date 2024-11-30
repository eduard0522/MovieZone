import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { TbMovie } from 'react-icons/tb'
import { BiCameraMovie } from 'react-icons/bi'
import { GrHomeRounded } from 'react-icons/gr'
import { IoSearch } from 'react-icons/io5'

import { GeneralContext } from '../Contexts/GeneralContext'
import Logo from '../../assets/logo.png'
import ButtonCategory from './ButtonCategory'
import ButtonLogin from '../Buttons/Login'

const Nav = () => {
  const { openSideNav, setOpenSideNav, isAuthenticated } = useContext(GeneralContext)
  const changeStateSideNav = () => {
    setOpenSideNav(!openSideNav)
  }
  return (
    <section className='px-8 py-4 flex justify-between w-full items-center z-20 h-[80px] fixed top-0 left-0 right-0 bg-blackP'>
      <div className={`${isAuthenticated ? ' xl:w-full justify-between' : 'xl:w-5/6 2xl:w-4/5'} flex gap-8 items-center`}>
        <div className='flex justify-start items-center gap-8'>
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
        </div>
        <div className='flex items-center'>
          <input
            type='text'
            className='xl:w-72 2xl:w-96 bg-transparent border-2  border-blackP-100 rounded-lg px-4 py-1'
          />
          <IoSearch className=' -translate-x-6' />
        </div>
      </div>
      {!isAuthenticated && <ButtonLogin />}
    </section>
  )
}

export default Nav
