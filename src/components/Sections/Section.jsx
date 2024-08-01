

const Section = () => {
  return(
    <section>
      <h2 className="text-3xl font-semibold mb-4 "> Most Popular </h2>
      <div className="flex gap-4 flex-wrap">
        <div className="w-52 h-72 relative overflow-hidden cursor-pointer">
          <img src="http://es.web.img3.acsta.net/pictures/17/11/27/13/44/5907148.jpg" alt="Card image cap" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
            <h5 className="mb-2 text-2xl font-normal px-4"> Ferdinand </h5>
          </div>
        </div>

        <div className="w-52 h-72 relative overflow-hidden cursor-pointer">
          <img src="https://im.ziffdavisinternational.com/ign_es/screenshot/default/guardaines_jhsk.jpg" alt="Card image cap" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
            <h5 className="mb-2 text-2xl font-normal px-4"> Guardianes de la Galaxía  2</h5>
          </div>
        </div>

        <div className="w-52 h-72 relative overflow-hidden cursor-pointer">
          <img src="https://www.themoviedb.org/t/p/original/v5aC4nrzXFGJDWY4JO1eengXzqk.jpg" alt="Card image cap" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
            <h5 className="mb-2 text-2xl font-normal px-4"> Bolt </h5>
          </div>
        </div>

        <div className="w-52 h-72 relative overflow-hidden cursor-pointer">
          <img src="https://www.mubis.es/media/users/3724/203627/accion-cine-portada-y-posters-mayo-2018-l_cover.jpg" alt="Card image cap" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
            <h5 className="mb-2 text-2xl font-normal px-4"> Deadpool 2</h5>
          </div>
        </div>

        <div className="w-52 h-72 relative overflow-hidden cursor-pointer">
          <img src="https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-4.jpg" alt="Card image cap" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
            <h5 className="mb-2 text-2xl font-normal px-4"> Visitation </h5>
          </div>
        </div>

        <div className="w-52 h-72 relative overflow-hidden cursor-pointer">
          <img src="http://es.web.img2.acsta.net/pictures/19/05/27/12/05/3089180.jpg" alt="Card image cap" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
            <h5 className="mb-2 text-2xl font-normal px-4"> Jhon Wick 3</h5>
          </div>
        </div>
    
      </div>
    </section>
  )
}

export default Section