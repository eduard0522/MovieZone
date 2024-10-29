import Nav from "../components/Nav/Nav"
import { useContext } from "react"
import { ContextVideo } from "../components/Contexts/contextVideo"

import Movie from "../components/Movie/CardMovie"
import FilterByGenres from "../components/Sections/FilteredByGenres"
import Footer from "../components/Footer/Footer"


const Movies = () => {

  const { movieList } = useContext(ContextVideo)
  return (
    <>
      <Nav />
      <main>
          <FilterByGenres />
      </main>
      <Footer />
    </>
  )
}

export default Movies