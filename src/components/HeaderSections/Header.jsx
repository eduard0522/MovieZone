import ButtonSeeAll from './ButtonnSeeAll'
import Title from './Title'

const Header = ({ title }) => {
  return (
    <div className='flex justify-between my-6'>
      <Title title={title} />
      <ButtonSeeAll />
    </div>
  )
}

export default Header
