import Nav from '../components/Nav/Nav'
import FilterByGenres from '../components/Sections/FilteredByGenres'
import Footer from '../components/Footer/Footer'

const Movies = () => {
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
