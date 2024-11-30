import { NavLink } from 'react-router-dom'

export const ListItem = ({ content, Icon, link }) => {
  return (
    <NavLink to={link}>
      <div className='hover:text-white group cursor-pointer text-base border-none font-semibold flex items-center gap-4'>
        {Icon && <Icon className='text-2xl group-hover:border-b-2 border-greenP pb-1 ' />}
        <li>
          {content}
        </li>
      </div>
    </NavLink>
  )
}
