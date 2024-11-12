import { useFormContext } from 'react-hook-form'

const PasswordInput = ({ inputName }) => {
  const { register, formState: { errors } } = useFormContext()
  return (
    <div className='w-full relative flex group '>
      <label className='absolute -top-1 left-0 right-0 transition-all peer/draft group-has-[:valid]:-top-6 group-has-[:focus]:-top-6 font-bold'> {inputName} </label>
      <input
        {...register('password', {
          required: {
            required: true,
            message: 'Este campo es obligatorio'
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial'
          }
        })}
        className='w-full  px-1 border-b-2 border-white text-whithe bg-transparent outline-none absolute top-0 left-0 right-0  peer-hover/draft:border-greenP focus:border-greenP'
      />

      {
        errors.password && <span className='text-xs absolute top-6'> {errors.password.message} </span>
      }
    </div>

  )
}

export default PasswordInput
