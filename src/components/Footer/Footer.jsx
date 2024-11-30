import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='mt-10 border-t-4 border-gray-700 px-8 ml-8 mr-8 m-auto text-blackP-100'>
      <div className='container'>
        <ul className='flex justify-center items-center gap-10 text-lg font-medium'>
          <li className='hover:text-white cursor-pointer'> FeedBack </li>
          <li className='hover:text-white cursor-pointer'> Help </li>
          <li>
            <img src={Logo} alt='' className='w-60' />
          </li>
          <li className='hover:text-white cursor-pointer'> FAQ </li>
          <li className='hover:text-white cursor-pointer'> About me </li>
        </ul>
      </div>
      <p className='text-center w-full font-thin text-sm '>@2024 Desarrollado por <span className='font-semibold'> SolutionCode </span> </p>
    </footer>
  )
}

export default Footer
