

const Movie = ({ movie }) => {
  return (
    <div className="w-52 h-72 relative overflow-hidden cursor-pointer" key={movie.title}>
        <img src={movie.poster} alt="Card image cap" />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
          <h5 className="mb-2 text-xl font-normal px-4">{ movie.title} </h5>
          </div>
    </div>
  )
}
export default Movie