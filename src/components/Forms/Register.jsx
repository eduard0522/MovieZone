import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

import { contextForms } from '../Contexts/FormContext'
import { ContextVideo } from '../Contexts/contextVideo'
import FormContainer from './FormPlugins/FormContainer'
import FormTitle from './FormPlugins/FormTitle'
import EmailInput from './FormPlugins/EmailInput'
import InputText from './FormPlugins/TextInput'
import PasswordInput from './FormPlugins/PasswordInput'
import SubmitButton from './FormPlugins/SubmitButton'
import CloseFormButton from './FormPlugins/CloseFormButton'
import Register from '../../axios/Register'

const RegisterForm = () => {
  const { setOpenFormRegister, openFormLogin, openFormRegister, setOpenFormLogin, valueInputEmail } = useContext(contextForms)
  const { setIsAuthenticated } = useContext(ContextVideo)

  const navigate = useNavigate()
  const methods = useForm()

  const changeStatusForm = () => {
    setOpenFormRegister(!openFormRegister)
    setOpenFormLogin(!openFormLogin)
  }

  const onClick = async (data) => {
    try {
      const res = await Register(data)
      if (res.error) {
        return toast.error(res.message)
      }
      setIsAuthenticated(true)
      toast.success(res.message, {
        icon: '🎉'
      })
      navigate('/')
    } catch (error) {
      return toast.error('Ocurrio un error inesperado.')
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
