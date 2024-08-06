import { useState, useEffect } from "react"
import axios from "axios"

const VideoPlayer = () => {

  const [videoUrl, setVideoUrl] = useState('')

  useEffect(()  => {
      const getVideo = async () => {
          try {
            const response = await axios.get('http://localhost:3000/videos/video',{
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
    <dialog open={false} >
       <div>
        <h1>Video Streaming</h1>
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