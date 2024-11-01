
const FormContainer = ({children}) => {
  return (
    <div className="bg-[#9e8f8f22]  border-whiteP border-2 backdrop-blur-sm flex flex-col  gap-8 items-center justify-center  py-10 px-6 rounded-2xl  w-[380px]" >
        {
          children
        }
    </div>
  )
}

export default FormContainer