import { createContext, useEffect, useState } from 'react'
import moviesDates from '../../assets/moviesDates.json'

export const ContextVideo = createContext()

export const VideoProvider = ({ children }) => {
  const [movieSelected, setMovieSelected] = useState('')
  const [movieList, setMovieList] = useState([])
  const [loadingDates, setLoadingDates] = useState(true)
  const [openModalMovie, setOpenModalMovie] = useState(false)

  useEffect(() => {
    setMovieList(moviesDates)
    if (moviesDates.length === 0) {
      setMovieSelected([])
    }
    setMovieSelected(moviesDates[0])
    setLoadingDates(false)
  }, [])

  const changeOpenModal = () => {
    setOpenModalMovie(!openModalMovie)
  }

  return (
    <ContextVideo.Provider
      value={{
        movieList,
        movieSelected,
        setMovieSelected,
        moviesDates,
        loadingDates,
        changeOpenModal,
        openModalMovie
      }}
    >
      {children}
    </ContextVideo.Provider>
  )
}
