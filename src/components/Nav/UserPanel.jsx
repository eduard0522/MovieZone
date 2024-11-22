import avatarUser from '../../assets/avatar-prueba.jpg'

export const UserPanel = () => {
  return (
    <div className='flex gap-4 items-center text-base font-semibold'>
      <img src={avatarUser} alt='avatar de usuario' className='w-14 h-14 rounded-full' />
      <h2> Juan carlos </h2>
    </div>
  )
}
