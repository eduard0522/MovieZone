const TagsMovie = ({ tags }) => {
  return (
    <div className='flex gap-2'>
      {
        tags.map((tag) => <span className='font-bold bg-whiteP-50 px-4 py-1 rounded-sm hover:bg-whiteP-75' key={tag}> {tag} </span>)
       }
      <span className='font-bold '> 2h - 35min</span>

    </div>
  )
}

export default TagsMovie
