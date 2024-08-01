

const Section = () => {
  return(
    <section>
      <h2 className="text-3xl font-semibold mb-4 "> Most Popular </h2>
      <div className="flex gap-4 flex-wrap">
        <div className="w-52 h-72 relative">
          <img src="https://picsum.photos/208/288" alt="Card image cap" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent flex items-end">
            <h5 className="mb-2 text-2xl font-normal px-4"> Card title </h5>
          </div>
        </div>
    
      </div>
    </section>
  )
}

export default Section