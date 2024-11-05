import { createContext, useEffect,  useState  } from "react"
import moviesDates from "../../assets/moviesDates.json"


export const ContextVideo = createContext()

export const VideoProvider = ({ children }) => {

  const[ movieSelected ,  setMovieSelected ] = useState("")
  const [ movieList , setMovieList ] = useState([])
  const [loadingDates, setLoadingDates] = useState(true)
  const [openModalMovie, setOpenModalMovie] = useState(false)
  const [openFormLogin, setOpenFormLogin] = useState(false)
  const [openFormRegister, setOpenFormRegister] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  useEffect(() => {
    setMovieList(moviesDates)
    if(moviesDates.length === 0){
      setMovieSelected([])
    }
    setMovieSelected(moviesDates[0])
    setLoadingDates(false)
  },[]) 

  const changeOpenModal = () => {
    setOpenModalMovie(!openModalMovie)
  }

  return (
    <ContextVideo.Provider 
       value = {{ movieList,
        movieSelected, 
        setMovieSelected,
        moviesDates,
        loadingDates, 
        changeOpenModal, 
        openModalMovie,
        openFormLogin, 
        setOpenFormLogin,
        openFormRegister,
        setOpenFormRegister,
        isAuthenticated,
        setIsAuthenticated }}>
      {children}
    </ContextVideo.Provider>
  )
}