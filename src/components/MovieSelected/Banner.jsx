import Title from "./Title"
import Description from "./Descripcion"
import ButtonPlay from "./ButtonPlay"
import TagsMovie from "./TagsMovie"
import ButtonSeeLater from "./ButtonSeeLater"

const Banner = ({movie}) => {
  return ( 
    <div className=" w-[100%] h-[80vh] bg-cover mx-auto rounded-lg" style={ { backgroundImage : 
        `url("https://i2.wp.com/elanillounico.com/wp-content/gallery/el-hobbit-material-promocional-de-las-peliculas/LBDLCE-banner14.jpg")`  } }>
       
      <div className="w-full h-full bg-gradient-to-tr from-[#000000cd] to-[#00000004] flex flex-col justify-end gap-4 p-8">
          <Title title = {movie.title}/>
          <TagsMovie tags={movie.genre}/>
          <Description  description = { movie.description}/>

          <div className="flex gap-4">
            <ButtonPlay />
            <ButtonSeeLater />
          </div>
        

      </div>
    </div>
  )
}

export default Banner