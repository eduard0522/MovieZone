import { useEffect, useState } from "react"
import moviesDates from "../../assets/moviesDates.json"

const MostPopular = () => {

  const [ movies, setMovies] = useState([])
  const [loading,  setLoading] = useState(true)
 

 useEffect(() => {
 /*  const fetchMovies = async () => {
    try {
      const response = await fetch("../../assets/moviesDates.json")
      console.log(response)
         const data = await response.data.json() 
       setMovies(data) 
   }catch(err){
    console.error(err)
   }
  }
  fetchMovies() */
  setMovies(moviesDates)
  setLoading(false)

  },[])

  if(loading) return <h3> Loading ..... </h3>
  if(!loading && movies.length === 0) return <h3> No data. </h3>

  return(
    <section>
      <h2 className="text-3xl font-semibold mb-4 "> Most Popular </h2>
      <div className="flex gap-4 flex-wrap">

     {
      movies.map((movie) => {
        return(
          <div className="w-52 h-72 relative overflow-hidden cursor-pointer" key={movie.title}>
            <img src={movie.poster} alt="Card image cap" />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
              <h5 className="mb-2 text-2xl font-normal px-4">{ movie.title} </h5>
            </div>
          </div>
        )
      })

     }
      </div>
    </section>
  )
}

export default MostPopular