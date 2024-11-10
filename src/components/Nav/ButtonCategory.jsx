const ButtonCategory = ({ category, icon }) => {
  return (
    <div className=' flex  items-center'>
      <button className='flex  gap-2 items-center text-3xl font-semibold'>
        {icon}
        <span className=' text-xl'> {category} </span>
      </button>
    </div>
  )
}

export default ButtonCategory
