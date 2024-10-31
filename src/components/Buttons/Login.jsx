import { useContext } from "react"
import { ContextVideo } from "../Contexts/contextVideo"

const ButtonLogin = () => {
  const { setOpenForm } = useContext(ContextVideo)
  return(

    <div className=" bg-redP py-2 px-6 rounded-sm cursor-pointer hover:bg-greenP" 
         onClick={() => setOpenForm(true) }
    >
        <span className="font-semibold"> Login </span>
    </div>
  )
}

export default ButtonLogin