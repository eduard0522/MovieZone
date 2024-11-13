import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

import { ContextVideo } from '../Contexts/contextVideo'
import { contextForms } from '../Contexts/FormContext'
import FormContainer from './FormPlugins/FormContainer'
import FormTitle from './FormPlugins/FormTitle'
import EmailInput from './FormPlugins/EmailInput'
import InputText from './FormPlugins/TextInput'
import PasswordInput from './FormPlugins/PasswordInput'
import SubmitButton from './FormPlugins/SubmitButton'
import CloseFormButton from './FormPlugins/CloseFormButton'
import Register from '../../axios/Register'

const RegisterForm = () => {
  const { setIsAuthenticated, setOpenFormRegister, openFormLogin, openFormRegister, setOpenFormLogin } = useContext(ContextVideo)
  const {valueInputEmail} = useContext(contextForms)

  const navigate = useNavigate()
  const methods = useForm()

  const changeStatusForm = () => {
    setOpenFormRegister(!openFormRegister)
    setOpenFormLogin(!openFormLogin)
  }

  const onClick = async (data) => {
    try {
      const res = await Register(data)
      if (res.status === 201) {
        toast.success(`Hola ${res.data.username}, Gracias por registrarte!!`, {
          icon: '🎉'
        })
      }
    } catch (error) {
      toast.error(error.response?.data.message)
    }
  }
  return (
    <FormProvider {...methods}>
      <FormContainer>
        <CloseFormButton name='register' />
        <form
          onSubmit={methods.handleSubmit(onClick)}
          className='w-full flex flex-col gap-y-10 justify-center items-center font-Poppins'
        >
          <FormTitle title='Realizar registro' />

          <div className='w-full flex flex-col gap-y-16 h-40'>
            <InputText inputName='Nombre*' />
            <EmailInput inputName='Correo*' value={valueInputEmail} />
            <PasswordInput inputName='Contraseña*' />
          </div>
          <SubmitButton content='Registrarme' />
        </form>
        <h3> Ya tengo cuenta,<span className='font-bold underline cursor-pointer hover:text-greenP' onClick={changeStatusForm}> Ingresar.</span> </h3>

      </FormContainer>
      <Toaster />
    </FormProvider>
  )
}

export default RegisterForm
