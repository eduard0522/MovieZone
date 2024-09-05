import Logo from "../../assets/logo.png"


const Footer = () => {
  return (
      <footer className="mt-10 border-t-4 border-gray-700">
        <div className="container">
          <ul className="flex justify-center items-center gap-10 text-lg font-medium">
            <li> FeedBack </li>
            <li> Help </li>
            <li>
              <img src={Logo} alt=""  className="w-60"/>
            </li>
            <li> FAQ </li>
            <li> About me </li>
          </ul>
        </div>
        <p className="text-center w-full font-thin text-sm">@2024 Desarrollado por <span className="font-semibold"> SolutionCode </span> </p>
      </footer>
  )
}

export default Footer