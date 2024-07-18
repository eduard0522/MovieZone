import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx"
import Series from "../pages/Series.jsx"
import Movies from "../pages/Movies.jsx"

const Router = () => {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
  )
}
export default Router