import { createContext, useState } from 'react'

export const contextForms = createContext()

export const FormsProvider = ({ children }) => {
  const [valueInputEmail, setValueInputEmail] = useState('')
  return (
    <contextForms.Provider
      value={{ valueInputEmail, setValueInputEmail }}
    >
      {
        children
      }
    </contextForms.Provider>
  )
}
