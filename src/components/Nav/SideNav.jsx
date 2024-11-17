import { UserPanel } from './UserPanel'
import { ListItem } from './ListItem'
export const SideNav = () => {
  return (
    <section className='w-1/6 absolute top-0 left-0 bottom-0 bg-blackP flex flex-col justify-between items-left  text-blackP-100 z-10 '>
      <UserPanel />
      <nav className='flex flex-col justify-between h-3/5 list-none'>
        <ListItem content='Inicio' />
        <ListItem content='Películas' />
        <ListItem content='Series' />
        <ListItem content='Catergorías ' />
        <ListItem content='Recientes ' />
        <ListItem content='Aleatorio' />
      </nav>
      <div>
        <h2> Perfil </h2>
        <button> Cerrar Sesión</button>
      </div>
    </section>
  )
}
