import Logo from "../../assets/logo.png"


const Footer = () => {
  return (
      <footer>
        <div className="container">
          <ul className="flex justify-between">
            <li> FeedBack </li>
            <li> Help </li>
            <li> FAQ </li>
            <li>
              <img src={Logo} alt=""  className="w-20"/>
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer