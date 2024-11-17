import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from '../components/ProtectedRoutes.jsx/ProtectedRoutes.jsx'

import Home from '../pages/Home.jsx'
import Series from '../pages/Series.jsx'
import Movies from '../pages/Movies.jsx'
import Index from '../pages/Index.jsx'

import { VideoProvider } from '../components/Contexts/contextVideo.jsx'

const Router = () => {
  return (
    <VideoProvider>
      <Routes>
        <Route
          path='/auth'
          element={<Index />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
        </Route>
      </Routes>
    </VideoProvider>
  )
}
export default Router
