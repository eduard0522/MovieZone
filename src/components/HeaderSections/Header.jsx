import ButtonSeeAll from './ButtonnSeeAll'
import Title from './Title'

const Header = ({ title }) => {
  return (
    <div className='flex justify-between'>
      <Title title={title} />
      <ButtonSeeAll />
    </div>
  )
}

export default Header
