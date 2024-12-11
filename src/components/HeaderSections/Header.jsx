import ButtonSeeAll from './ButtonnSeeAll'
import Title from './Title'

const Header = ({ title }) => {
  return (
    <div className='flex justify-between my-4 xl:my-5 3xl:my-6'>
      <Title title={title} />
      <ButtonSeeAll />
    </div>
  )
}

export default Header
