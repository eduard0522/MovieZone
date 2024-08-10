import { TbMovie } from "react-icons/tb";
import { BiCameraMovie } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.png"
import ButtonCategory from "./ButtonCategory"
import avatarPrueba from "../../assets/avatar-prueba.jpg"

const Nav = () => {
  return (
    <section className="flex justify-between w-full items-center">
      <div className="flex gap-8 items-center w-4/5 justify-start">
          <div className="w-48"> <img src={Logo} alt="Logo MovieZone"  /> </div>
            <nav className="flex gap-8 text-blackP-100"> 
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-white" : "text-blackP-100" )} > 
                    <ButtonCategory  category="Home"   icon={<GrHomeRounded />} />
              </NavLink>
              <NavLink to="/movies" className={({ isActive }) => (isActive ? "text-white" : "text-blackP-100" )} >   
                   <ButtonCategory  category="Movies" icon={<TbMovie />} />
              </NavLink>

              <NavLink to="/series" className={({ isActive }) => (isActive ? "text-white" : "text-blackP-100" )} >      
                     <ButtonCategory  category="Series" icon={<BiCameraMovie />} />
              </NavLink>
            </nav>
            <div className="flex items-center">
              <input type="text" className=" w-96 bg-transparent border-2  border-blackP-100 rounded-lg px-4 py-1"/>
              <IoSearch  className=" -translate-x-6"/>
            </div>
      </div>
      <div className="w-12 rounded-full" > <img src={avatarPrueba} alt="Avatar del perfil"  className="rounded-full"/></div>
    </section>
  )
}

export default Nav