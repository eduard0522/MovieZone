import React from 'react'

import Router from './router/Routes'
import { SideNav } from './components/Nav/SideNav'
import Nav from './components/Nav/Nav'
import { FormsProvider } from './components/Contexts/FormContext'
import Footer from './components/Footer/Footer'
import { GeneralContextProvider } from './components/Contexts/GeneralContext'

function App () {
  return (
    <GeneralContextProvider>
      <FormsProvider>
        <div className='flex min-h-[100vh] flex-col justify-between'>
          <Nav />
          <main className='px-8 py-4'>
            <section className='relative'>
              <SideNav />
              <Router />
            </section>
          </main>
          <Footer />
        </div>
      </FormsProvider>
    </GeneralContextProvider>
  )
}

export default App
