const Movie = ({ movie }) => {
  return (
    <div className='min-w-32 min-h-48 max-w-48 max-h-64 relative overflow-hidden cursor-pointer  hover:scale-105 transition-all  ' key={movie.title}>
      <img src={movie.poster} alt='Card image cap' />
      <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end'>
        <h5 className='mb-2 text-lg font-normal px-4 line-clamp-1'>{movie.title} </h5>
      </div>
    </div>
  )
}
export default Movie
