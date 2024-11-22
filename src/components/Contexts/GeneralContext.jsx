import { createContext, useState } from 'react'

export const GeneralContext = createContext()

export const GeneralContextProvider = ({ children }) => {
  const [openSideNav, setOpenSideNav] = useState(false)
  return (
    <GeneralContext.Provider
      value={{
        openSideNav,
        setOpenSideNav
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
