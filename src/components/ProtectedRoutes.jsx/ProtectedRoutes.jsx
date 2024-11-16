import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ContextVideo } from '../Contexts/contextVideo.jsx'

export const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(ContextVideo)

  if (!isAuthenticated) {
    return <Navigate to='/auth' />
  }
  return children || <Outlet />
}
