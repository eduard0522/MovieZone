import { createContext, useState } from 'react'

export const contextForms = createContext()

export const FormsProvider = ({ children }) => {
  const [valueInputEmail, setValueInputEmail] = useState('')
  const [openFormLogin, setOpenFormLogin] = useState(false)
  const [openFormRegister, setOpenFormRegister] = useState(false)

  return (
    <contextForms.Provider
      value={{
        valueInputEmail,
        setValueInputEmail,
        openFormLogin,
        setOpenFormLogin,
        openFormRegister,
        setOpenFormRegister
      }}
    >
      {children}
    </contextForms.Provider>
  )
}
