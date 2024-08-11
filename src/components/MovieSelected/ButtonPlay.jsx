import { FaPlay } from "react-icons/fa";

const ButtonPlay = ({ changeOpenModal }) => {
  return (
      <button className=" w-48 rounded-sm bg-whiteP-50 flex gap-4 items-center justify-center py-2 hover:bg-whiteP-75"
        onClick={changeOpenModal}
      >
        <div className="w-10 h-10  bg-redP rounded-full flex items-center justify-center"> 
            <FaPlay className="text-white text-xl " />
        </div>
        <span className="font-bold"> Play Now </span>
      </button>
  )
}

export default ButtonPlay