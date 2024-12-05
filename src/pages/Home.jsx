import SlideRecomendations from '../components/RecomendationsSlide/MovieSlide'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import MostPopular from '../components/Sections/MostPopular'

import { useContext } from 'react'
import { ContextVideo } from '../components/Contexts/contextVideo'
import MostRecents from '../components/Sections/MostRecents'

const Home = () => {
  const { movieSelected, loadingDates } =
    useContext(ContextVideo)
  return (
    <>
      <section>
        {loadingDates
          ? (
            <div>Loading...</div>
            )
          : (
            <SlideRecomendations movie={movieSelected} />
            )}
        <MostPopular />
        <MostRecents />
      </section>

      <section>
        <VideoPlayer />
      </section>
    </>
  )
}

export default Home
