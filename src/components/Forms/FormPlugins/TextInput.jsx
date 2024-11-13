import { useFormContext } from 'react-hook-form'

const InputText = ({ inputName }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <div className='w-full relative flex group '>
      <label className='absolute -top-1 left-0 right-0 transition-all peer/draft group-has-[:valid]:-top-6 group-has-[:focus]:-top-6 font-semibold'>
        {inputName}
      </label>
      <input
        {...register('username', {
          required: {
            value: true,
            message: 'El nombre es requerido'
          }
        })}
        className='w-full  px-1 border-b-2 border-white text-whithe bg-transparent outline-none absolute top-0 left-0 right-0  peer-hover/draft:border-greenP focus:border-greenP font-bold'
      />
      {
        errors.username && <span className='absolute top-7 text-red-500 text-xs font-semibold'>  {errors.username.message} </span>
      }
    </div>
  )
}

export default InputText
