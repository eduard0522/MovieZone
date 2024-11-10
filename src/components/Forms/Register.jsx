import { FormProvider, useForm } from 'react-hook-form'

import FormContainer from './FormPlugins/FormContainer'
import FormTitle from './FormPlugins/FormTitle'
import EmailInput from './FormPlugins/EmailInput'
import PasswordInput from './FormPlugins/PasswordInput'
import SubmitButton from './FormPlugins/SubmitButton'
import CloseFormButton from './FormPlugins/CloseFormButton'

const RegisterForm = () => {
  const methods = useForm()
  const onClick = (data) => {
    console.log(data)
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
            <EmailInput inputName='Nombre' />
            <EmailInput inputName='Correo' />
            <PasswordInput inputName='Contraseña' />
          </div>

          <SubmitButton content='Registrarme' />

        </form>

        <h3> Ya tengo cuenta, <span className='font-bold underline cursor-pointer hover:text-greenP'> Ingresar. </span> </h3>

      </FormContainer>
    </FormProvider>
  )
}

export default RegisterForm
