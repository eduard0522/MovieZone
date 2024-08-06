import { createContext, useEffect,  useState  } from "react"
import moviesDates from "../../assets/moviesDates.json"


export const ContextVideo = createContext()

export const VideoProvider = ({ children }) => {

  const[ movieSelected ,  setMovieSelected ] = useState("")
  const [ movieList , setMovieList ] = useState([])

  useEffect(() => {
    setMovieList(moviesDates)
    console.log(movieList)
    setMovieSelected(moviesDates[0])
  },[]) 

  console.log(movieList)

  return (
    <ContextVideo.Provider 
    value = {{ movieList, movieSelected, setMovieSelected, moviesDates }}>
      {children}
    </ContextVideo.Provider>
  )
}