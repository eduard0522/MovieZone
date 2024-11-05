import { useState, useEffect, useContext } from "react"
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios"
import { ContextVideo } from "../Contexts/contextVideo"

const VideoPlayer = () => {

  const [videoUrl, setVideoUrl] = useState('')
  const {changeOpenModal, openModalMovie,movieSelected } = useContext(ContextVideo)

  useEffect(()  => {
      const getVideo = async () => {
          try {
            const response = await axios.get('http://localhost:3100/videos/video',{
              responseType: 'blob'
            });
            console.log(response)
            const videoBlob = new Blob([response.data], { type: 'video/mp4' })
            const videoUrl = URL.createObjectURL(videoBlob)
            setVideoUrl(videoUrl)
          } catch (error) {
            console.error('Error fetching the video', error)
          }
      } 
      getVideo()
      },[])


  return (
    <dialog open={openModalMovie}  
      className="w-full h-full absolute top-0 left-0 right-0 bottom-0">
        <button onClick={() => changeOpenModal(false)} 
           className=" z-10 absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-200">
          <IoMdCloseCircle className="text-4xl" />
        </button>
        <div>
        {videoUrl ? (
          <video controls width="100%">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading...</p>
        )}
        </div>
    </dialog>
  )
}


export default VideoPlayer