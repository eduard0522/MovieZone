import { useContext } from "react"

import {ContextVideo} from "../../Contexts/contextVideo.jsx"

import { IoCloseCircle } from "react-icons/io5";

const CloseFormButton = () => {

  const { openForm, setOpenForm } = useContext(ContextVideo)

  const changeFormStatus = () => {
    setOpenForm(!openForm)
  } 

  return (
    <div className="absolute top-2 right-4 font-bold cursor-pointer text-2xl hover:text-redP" onClick={changeFormStatus}> <IoCloseCircle className="bg-transparent"/> </div>
  )
}

export default CloseFormButton