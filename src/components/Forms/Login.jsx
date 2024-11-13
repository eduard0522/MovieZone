import { useForm, FormProvider } from 'react-hook-form'
import { useContext } from 'react'

import { ContextVideo } from '../Contexts/contextVideo'
import EmailInput from './FormPlugins/EmailInput'
import PasswordInput from './FormPlugins/PasswordInput'
import CloseFormButton from './FormPlugins/CloseFormButton'
import CheckBox from './FormPlugins/CheckBox'
import FormContainer from './FormPlugins/FormContainer'
import FormTitle from './FormPlugins/FormTitle'
import SubmitButton from './FormPlugins/SubmitButton'

import { Login } from '../../axios/Login.axios'

const FormLogin = () => {
  const methods = useForm()
  const { setOpenFormRegister, openFormLogin, openFormRegister, setOpenFormLogin } = useContext(ContextVideo)

  const onSubmit = (data) => {
    Login(data)
  }

  const changeStatusForm = () => {
    setOpenFormLogin(!openFormLogin)
    setOpenFormRegister(!openFormRegister)
  }

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <CloseFormButton name='login' />
        <FormTitle title='Login' />
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='w-full flex flex-col gap-y-10 justify-center items-center font-Poppins'
        >
          <div className='w-full flex flex-col gap-y-16 h-24'>
            <EmailInput
              inputName='Usuario'
            />
            <PasswordInput
              inputName='Contraseña'
            />
          </div>

          <div className='flex justify-between items-center  w-full'>
            <CheckBox />
            <span className='font-semibold cursor-pointer underline hover:text-greenP '>
              Olvidó la Contraseña ?
            </span>
          </div>

          <SubmitButton content='Ingresar' />
        </form>
        <h3>
          No tengo cuenta,
          <span className='font-bold underline cursor-pointer hover:text-greenP' onClick={changeStatusForm}>
            Registrarme.
          </span>
        </h3>
      </FormContainer>
    </FormProvider>
  )
}

export default FormLogin
