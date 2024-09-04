import Nav from "../components/Nav/Nav"
import MovieSelected from "../components/MovieSelected/MovieSelected"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"
import MostPopular from "../components/Sections/MostPopular"

import { useContext } from "react"
import { ContextVideo } from "../components/Contexts/contextVideo"
import MostRecents from "../components/Sections/MostRecents"
import Footer from "../components/Footer/Footer"

const Home = () => {
  const {movieSelected, setMovieSelected , loadingDates} = useContext(ContextVideo)
  return (
    <>
        <section>
              <Nav />
                {
                  loadingDates ? <div>Loading...</div> :  <MovieSelected movie={movieSelected} />
                }
                < MostPopular />
                <MostRecents />

        </section>
        
        <section>
            <VideoPlayer />
        </section>

        <Footer />
    </>
   
  )
}

export default Home