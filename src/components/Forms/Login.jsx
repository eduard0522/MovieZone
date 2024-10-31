import { useContext } from "react"
import { ContextVideo } from "../Contexts/contextVideo"

import InputForm from "./FormPlugins/Input"

const FormLogin = () => {
  const { openForm, setOpenForm } = useContext(ContextVideo)
  const handleFormSubmit = (even) => {
    return(
    even
    )
  }
  return (
    <div className="w-[380px] flex flex-col justify-center items-center gap-8 bg-[#9e8f8f22] backdrop-blur-sm py-10 px-6 rounded-2xl border-whiteP border-2" >
      <div className="absolute top-2 right-4 font-bold cursor-pointer hover:text-greenP" onClick={() => setOpenForm(false)}> X </div>
      <form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-y-8 justify-center items-center font-Poppins">

        <h2 className="font-bold text-2xl"> Login </h2>

        <div className="w-full flex flex-col gap-y-16 h-24">
            <InputForm inputName={"Usuario"} inputType={"text"} inputPlaceholder={""}/>
            <InputForm inputName={"Contraseña" } inputType={"text"} inputPlaceholder={""}/>
        </div>

        <div className="flex justify-between  w-full">
          <label> 
              <input type="checkbox" /> 
              Recordar
          </label>
         
          <span className="font-semibold cursor-pointer underline hover:text-greenP ">Olvidó la Contraseña ?</span>
        </div>
        <button className=" py-2 px-8 rounded-md text-blackP font-semibold bg-whiteP w-full hover:bg-redP hover:text-whiteP"> Ingresar </button>
      </form>
      <h3>No tengo cuenta, <span className="font-bold underline cursor-pointer hover:text-greenP"> Registrarme. </span> </h3>
    </div>
  )
}

export default FormLogin