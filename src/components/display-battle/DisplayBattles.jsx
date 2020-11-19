import Axios from "axios";
import "./DisplayBattles.scss";

const DisplayBattles = ({ match }) => {

//   const url = "test";
//   Axios.get(url)
//     .then((res) => res.data)
//     .then((data) => console.log(data));

  return <div className="battles-container">{match.params.style}</div>;
};

export default DisplayBattles;
