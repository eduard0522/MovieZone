const FormContainer = ({ children }) => {
  return (
    <div className='bg-[#5348482e] backdrop-blur-sm absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
      <div className='bg-[#00000053] border-whiteP border-2 backdrop-blur-sm flex flex-col  gap-8 items-center justify-center  py-10 px-6 rounded-2xl  w-[380px]'>
        {
              children
            }
      </div>
    </div>
  )
}

export default FormContainer
