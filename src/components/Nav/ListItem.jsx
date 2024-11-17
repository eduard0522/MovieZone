export const ListItem = ({ content }) => {
  return (
    <li
      className='cursor-pointer relative h-20 px-2 text-xl border-none font-semibold rounded-tl-[34%] rounded-bl-[34%] hover:text-blackP hover:bg-white flex items-center hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-4 hover:before:bg-blackP hover:before:rounded-br-full
        hover:before:right-0 hover:before:-top-1 hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-4 hover:after:bg-blackP hover:after:rounded-tr-full hover:after:-bottom-1 hover:after:right-0'
    >
      {content}
    </li>
  )
}
