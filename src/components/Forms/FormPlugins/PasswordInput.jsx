import { useFormContext } from 'react-hook-form'

const PasswordInput = ({ inputName }) => {
  const { register, formState: { errors }} = useFormContext()
  return (
    <div className='w-full relative flex bg-red-200 group '>
      <label className='absolute -top-1 left-0 right-0 transition-all peer/draft group-has-[:valid]:-top-6 group-has-[:focus]:-top-6'> {inputName} </label>
      <input
        {...register('password', {
          required: true,
          minLength: 8
        })}
        className='w-full  px-1 border-b-2 border-white text-whithe bg-transparent outline-none absolute top-0 left-0 right-0  peer-hover/draft:border-sky-500'
      />
    </div>

  )
}

export default PasswordInput
