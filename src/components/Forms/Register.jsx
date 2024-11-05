import { useContext } from "react";

import { ContextVideo } from "../Contexts/contextVideo";
import FormContainer from "./FormPlugins/FormContainer";
import FormTitle from "./FormPlugins/FormTitle";
import InputForm from "./FormPlugins/Input";
import SubmitButton from "./FormPlugins/SubmitButton";
import CloseFormButton from "./FormPlugins/CloseFormButton";


const RegisterForm = () => {
  return (
    <FormContainer > 
      <CloseFormButton name="register"/>
      <form className="w-full flex flex-col gap-y-10 justify-center items-center font-Poppins">
        <FormTitle  title={"Realizar registro"}/>

        <div className="w-full flex flex-col gap-y-16 h-40">
          <InputForm inputName={"Nombre"} inputType={"text"} />
          <InputForm inputName={"Correo"} inputType={"email"}/>
          <InputForm inputName={"Contraseña"} inputType={"password"}/>
        </div>

        <SubmitButton content={"Registrarme"}/>

      </form>

      <h3> Ya tengo cuenta, <span className="font-bold underline cursor-pointer hover:text-greenP"> Ingresar. </span> </h3>

    </FormContainer>
  )
}

export default RegisterForm