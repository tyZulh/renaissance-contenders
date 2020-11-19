import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  const menu = ["Philosophie", "Musique", "Tableaux", "Mode"];

  return (
    <nav>
      <ul>
        <h1>FUTUR&back</h1>
        {menu.map((x) => {
          return (
            <Link to={x} key={x}>
              <li>{x}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
