import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import bgImage from "../assets/bg_Index.jpg"

const Index = () => {
  return (
    <>
      <Nav />
      <div className="w-[100%] h-[90vh] bg-no-repeat bg-cover" style={{backgroundImage:`url(${bgImage})`}}>
        <div className="w-[100%] h-[100%] bg-[#00000047] flex items-center" >
          <div className="pl-10 flex flex-col gap-3 rounded-md overflow-hidden">
            <h2 className="text-2xl font-semibold "> Bienvenido a MovieZone</h2>
            <h2 className="text-4xl w-[550px] font-bold"> Solo un clic te separa de horas de diversión. Inicia sesión y haz de cada momento un espectáculo. </h2>
            <h3 className="text-xl"> Ingresa y disfruta de tus historias favoritas </h3>
            <div>
              <input type="text"  className="w-64 bg-white py-2 px-2 border-2 border-red-300 outline-none rounded-l text-blackP focus:border-greenP " placeholder="Ingresa tu correo electronico"/>
              <button className="py-2 px-4 bg-redP text-white border-2 border-redP  rounded-r hover:bg-greenP hover:border-greenP cursor-pointer">
                Registrarse
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
      
    </>
  )
}

export default Index