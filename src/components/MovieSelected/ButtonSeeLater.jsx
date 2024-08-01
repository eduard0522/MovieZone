import { TbClockPlus } from "react-icons/tb";;


const ButtonSeeLater = () => {
  return (
      <button className=" w-48 rounded-sm bg-whiteP-50 flex gap-4 items-center justify-center py-2 hover:bg-whiteP-75">
        <TbClockPlus className="text-white text-4xl " />
        <span className="font-bold "> See Later</span>
      </button>
  )
}
export default ButtonSeeLater