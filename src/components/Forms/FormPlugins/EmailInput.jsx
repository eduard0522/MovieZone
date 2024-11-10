import { useFormContext } from 'react-hook-form'

const InputForm = ({ inputName }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <div className='w-full relative flex group '>
      <label className='absolute -top-1 left-0 right-0 transition-all peer/draft group-has-[:valid]:-top-6 group-has-[:focus]:-top-6'>
        {inputName}
      </label>
      <input
        {...register('email', {
          required: {
            value: true,
            message: 'El correo es requerido'
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Correo inválido'
          }
        })}
        className='w-full  px-1 border-b-2 border-white text-whithe bg-transparent outline-none absolute top-0 left-0 right-0  peer-hover/draft:border-sky-500 font-bold text-greenP'
      />
      {
        errors.email && <span className='absolute top-7 text-red-500 text-xs font-semibold'>  {errors.email.message} </span>
      }
    </div>
  )
}

export default InputForm
