import { useContext } from 'react'
import { contextForms } from '../components/Contexts/FormContext'

import bgImage from '../assets/bg_Index.jpg'
import FormLogin from '../components/Forms/Login'
import RegisterForm from '../components/Forms/Register'

const Index = () => {
  const {
    openFormLogin,
    setOpenFormLogin,
    openFormRegister,
    setOpenFormRegister,
    setValueInputEmail
  } = useContext(contextForms)

  const handleClickRegister = () => {
    setOpenFormRegister(!openFormRegister)
  }
  return (
    <>
      <div
        className='w-[100%] h-[90vh] bg-no-repeat bg-cover relative rounded-md overflow-hidden'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='w-[100%] h-[100%] bg-[#00000047] flex items-center font-Poppins'>
          <div className='pl-10 flex flex-col gap-3 rounded-md overflow-hidden'>
            <h2 className='text-2xl font-semibold '>
              Bienvenido a
              <span className='font-bold text-3xl'> MovieZone </span>
            </h2>
            <h2 className='text-4xl w-[500px] font-bold'>

              Solo un click te separa de horas de diversión. Inicia sesión y haz
              de cada momento un espectáculo.
            </h2>
            <h3 className='text-xl'>

              Ingresa y disfruta de tus historias favoritas 🤍
            </h3>
            <div className='flex'>
              <input
                type='text'
                className='w-4/6 bg-white py-2 px-2 border-2 border-red-400 outline-none rounded-l text-blackP focus:border-greenP '
                placeholder='Ingresa tu correo electronico'
                onChange={(data) => {
                  setValueInputEmail(data.target.value)
                }}
              />
              <button
                onClick={handleClickRegister}
                className='py-2 px-4 w-2/6 bg-redP text-white border-2 font-semibold border-redP  rounded-r hover:bg-greenP hover:border-greenP cursor-pointer'
              >
                Registrarse
              </button>
            </div>
            <h4
              className='decoration-solid underline text-end font-semibold hover:text-greenP cursor-pointer'
              onClick={() => setOpenFormLogin(!openFormLogin)}
            >
              Ya estoy registrado
            </h4>
          </div>
          {openFormLogin && <FormLogin />}
          {openFormRegister && <RegisterForm />}
        </div>
      </div>
    </>
  )
}

export default Index
