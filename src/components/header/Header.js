import './Header.css'
import imgTitle from "../assets/retour-vers-le-futur.png"

const Header = () => {

  return (
    <div className="header__container">
      <header>
        <h1 id="first__title">
          FUTUR&back <img id="img__title" src={imgTitle} alt="Logo title" />
        </h1>
      </header>
    </div>
  )
}

export default Header;