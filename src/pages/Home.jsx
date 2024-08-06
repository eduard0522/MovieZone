import Nav from "../components/Nav/Nav"
import MovieSelected from "../components/MovieSelected/MovieSelected"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"
import MostPopular from "../components/Sections/Section"

import { useContext } from "react"
import { ContextVideo } from "../components/Contexts/contextVideo"

const Home = () => {
  const {movieSelected, setMovieSelected} = useContext(ContextVideo)
  console.log("Movie selectes " , movieSelected)
  return (
    <>
        <section>
              <Nav />
                <MovieSelected movie={movieSelected} />
                < MostPopular />
        </section>
        <section>
            <VideoPlayer />
        </section>
    </>
   
  )
}

export default Home