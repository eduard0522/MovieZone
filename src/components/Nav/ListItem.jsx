export const ListItem = ({ content, Icon }) => {
  return (
    <div className='hover:text-white group cursor-pointer relative h-20 text-base border-none font-semibold ]  px-4  hover:bg-black flex items-center gap-6  hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-4 hover:before:bg-blackP hover:before:rounded-br-full hover:before:right-0 hover:before:-top-1 hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-4 hover:after:bg-blackP hover:after:rounded-tr-full hover:after:-bottom-1 hover:after:right-0'>
      {Icon && <Icon className='text-2xl group-hover:border-b-2 border-greenP pb-1 ' />}
      <li>
        {content}
      </li>
    </div>
  )
}
