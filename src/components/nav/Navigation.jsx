import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./Navigation.css";

const Navigation = () => {
  const menu = ["philosopher", "music", "painting", "fashion"];

  return (
    <nav>
      <ul>
        {menu.map((x) => {
          return (
            <Link to={x} key={x}>
              <li><h3 className='nav-items'>{x}</h3></li>
            </Link>
          );
        })}
      <Header />
      </ul>
    </nav>
  );
};

export default Navigation;
