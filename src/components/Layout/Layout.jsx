import { useContext, useState } from 'react'

import Nav from '../Nav/Nav'
import { SideNav } from '../Nav/SideNav'
import Router from '../../router/Routes'
import { GeneralContext } from '../Contexts/GeneralContext'
import { LogoutModal } from '../Modals/LogoutModal'
import Footer from '../Footer/Footer'

export const LayoutPage = () => {
  const { openSideNav } = useContext(GeneralContext)
  const [openModalLogout, setOpenModalLogout] = useState(false)

  const changeStateModalLogout = () => {
    setOpenModalLogout(!openModalLogout)
  }
  return (
    <section className='flex flex-col min-h-[100vh]  justify-between font-Poppins'>
      <Nav />
      <main className='flex flex-1 px-8 mt-[80px]'>
        <div className={`bg-blackP z-10 transition-[width] ease-in-out duration-600 ${openSideNav ? 'w-1/6' : 'w-0'} overflow-hidden animate-resize`}>
          <SideNav setModal={changeStateModalLogout} />
        </div>
        <div className={`transition-[width] ease-in-out duration-600 ${openSideNav ? 'w-5/6' : 'w-full'} animate-resize`}>
          <Router />
        </div>
        {openModalLogout && <LogoutModal setModal={changeStateModalLogout} />}
      </main>
      <Footer />
    </section>
  )
}
