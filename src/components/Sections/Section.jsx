import { useContext } from "react"
import { ContextVideo } from "../Contexts/contextVideo"
import { Link } from "react-router-dom"

const MostPopular = () => {

  const {movieList , setMovieSelected} = useContext(ContextVideo)

    const handleOnclick = (movie) => {
    setMovieSelected(movie)
  }
  return(
    <section>
      <h2 className="text-3xl font-semibold mb-4 "> Most Popular </h2>
      <div className="flex gap-4 flex-wrap">

     {
      movieList.map((movie) => {
        return(
          <Link onClick={ () => {
            handleOnclick(movie)
          } } > 
            <div className="w-52 h-72 relative overflow-hidden cursor-pointer" key={movie.title}>
              <img src={movie.poster} alt="Card image cap" />
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
                <h5 className="mb-2 text-2xl font-normal px-4">{ movie.title} </h5>
              </div>
            </div>
          </Link>
        )
      })

     }
      </div>
    </section>
  )
}

export default MostPopular