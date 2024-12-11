import Header from '../../HeaderSections/Header'

const ContainerSections = ({ children, title }) => {
  return (
    <section>
      <Header title={title} />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 3xl:grid-cols-8 6xl:grid-cols-12 gap-4 max-w-[100vw] overflow-hidden'>
        {children}
      </div>
    </section>
  )
}

export default ContainerSections
