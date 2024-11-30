import avatarUser from '../../assets/avatar-prueba.jpg'

export const UserPanel = () => {
  return (
    <div className='flex gap-4 items-center text-base font-semibold'>
      <img src={avatarUser} alt='avatar de usuario' className='w-12 h-12 rounded-full' />
      <h2> Juan carlos </h2>
    </div>
  )
}
