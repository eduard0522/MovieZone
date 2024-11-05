import Nav from "../components/Nav/Nav"
import MovieSelected from "../components/MovieSelected/MovieSelected"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"
import MostPopular from "../components/Sections/MostPopular"
import { Navigate } from "react-router-dom"

import { useContext, useEffect } from "react"
import { ContextVideo } from "../components/Contexts/contextVideo"
import MostRecents from "../components/Sections/MostRecents"
import Footer from "../components/Footer/Footer"

const Home = () => {
  const {movieSelected, loadingDates, isAuthenticated} = useContext(ContextVideo)
  return (
    <>
        { !isAuthenticated ? <Navigate to="/auth"/> : <Navigate to = "/"/> }
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