import { FaArrowRight } from "react-icons/fa6";


const ButtonSeeAll = () => {
  return(
    <button type="button" className="flex items-center justify-center gap-2 font-medium text-xl">
      See All  <FaArrowRight className="text-redP" />
     
    </button>
  )
}


export default ButtonSeeAll