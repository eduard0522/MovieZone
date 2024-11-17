import React from 'react'

import Router from './router/Routes'
import { SideNav } from './components/Nav/SideNav'
import Nav from './components/Nav/Nav'
import { FormsProvider } from './components/Contexts/FormContext'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <FormsProvider>
      <Nav />
      <main className='px-8 py-4'>
        <section className='relative'>
          <SideNav />
          <Router />
        </section>
      </main>
      <Footer />
    </FormsProvider>
  )
}

export default App
