import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const menu = ["philosophy", "music", "painting", "fashion"];

  return (
    <nav>
      <ul>
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
