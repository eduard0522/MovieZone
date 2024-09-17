import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import bgImage from "../assets/bg_Index.jpg"

const Index = () => {
  return (
    <>
      <Nav />
      <div className="w-[100%] h-[90vh] bg-no-repeat bg-cover" style={{backgroundImage:`url(${bgImage})`}}>
      </div>
      <Footer />
      
    </>
  )
}

export default Index