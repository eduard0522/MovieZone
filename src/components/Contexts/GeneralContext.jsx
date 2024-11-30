import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const GeneralContext = createContext()

export const GeneralContextProvider = ({ children }) => {
  const [openSideNav, setOpenSideNav] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const cookies = Cookies.get()

    if (cookies.acess_token) {
      return setIsAuthenticated(true)
    }
  }, [])

  const logout = () => {
    Cookies.remove('acces_token')
    setIsAuthenticated(false)
    return 'Cesión cerrada'
  }
  return (
    <GeneralContext.Provider
      value={{
        openSideNav,
        setOpenSideNav,
        setIsAuthenticated,
        isAuthenticated,
        logout
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
