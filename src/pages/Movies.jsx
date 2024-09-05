import Nav from "../components/Nav/Nav"
import { useContext } from "react"
import { ContextVideo } from "../components/Contexts/contextVideo"

import Movie from "../components/Movie/CardMovie"

const Movies = () => {

  const { movieList } = useContext(ContextVideo)
  return (
    <>
      <Nav />
      <main>
         <h1 className=" text-4xl font-bold"> All movies </h1>
         <div className="flex justify-center flex-wrap mt-8 gap-4">
            {
              movieList.map(movie => {
                return(
                  <Movie key={movie.codeVideo} movie={movie} />
                )
              })
            }
         </div>
      </main>
    </>
  )
}

export default Movies