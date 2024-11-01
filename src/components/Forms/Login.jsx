import InputForm from './FormPlugins/Input'
import CloseFormButton from './FormPlugins/CloseFormButton'
import CheckBox from './FormPlugins/CheckBox'
import FormContainer from './FormPlugins/FormContainer'
import FormTitle from './FormPlugins/FormTitle'
import SubmitButton from './FormPlugins/SubmitButton'

const FormLogin = () => {
  const handleFormSubmit = (even) => {
    return even
  }

  return (
    <FormContainer>
      <CloseFormButton />
      <FormTitle title={'Login'} />
      <form
        onSubmit={handleFormSubmit}
        className='w-full flex flex-col gap-y-10 justify-center items-center font-Poppins'
      >
        <div className='w-full flex flex-col gap-y-16 h-24'>
          <InputForm
            inputName={'Usuario'}
            inputType={'text'}
            inputPlaceholder={''}
          />
          <InputForm
            inputName={'Contraseña'}
            inputType={'text'}
            inputPlaceholder={''}
          />
        </div>

        <div className='flex justify-between items-center  w-full'>
          <CheckBox />
          <span className='font-semibold cursor-pointer underline hover:text-greenP '>
            Olvidó la Contraseña ?
          </span>
        </div>

        <SubmitButton content={'Ingresar'} />
      </form>
      <h3>
        {' '}
        No tengo cuenta,{' '}
        <span className='font-bold underline cursor-pointer hover:text-greenP'>
          {' '}
          Registrarme.{' '}
        </span>{' '}
      </h3>
    </FormContainer>
  )
}

export default FormLogin
