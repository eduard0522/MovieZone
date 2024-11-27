import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { GeneralContext } from '../Contexts/GeneralContext'

export const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(GeneralContext)
  if (!isAuthenticated) {
    return <Navigate to='/auth' />
  }
  return children || <Outlet />
}
