import React from 'react'

import { FormsProvider } from './components/Contexts/FormContext'
import { GeneralContextProvider } from './components/Contexts/GeneralContext'
import { LayoutPage } from './components/Layout/Layout'

function App () {
  return (
    <GeneralContextProvider>
      <FormsProvider>
        <LayoutPage />
      </FormsProvider>
    </GeneralContextProvider>
  )
}

export default App
