// import Axios from "axios";
import "./DisplayBattles.scss";
import Card from "../card/Card";

const info = {
  name: "Kanye",
  url:
    "https://i2-prod.mirror.co.uk/incoming/article6982466.ece/ALTERNATES/s615b/Kanye-West.jpg",
  artist: "Kanye",
  nbrVote: "0",
  style: "music",
  nationality: "USA",
  comment: "good vibes",
};

const DisplayBattles = ({ match }) => {
  //   const url = "";
  //   Axios.get(url)
  //     .then((res) => res.data)
  //     .then((data) => console.log(data));

  return (
    <div className="battles-container">
      {match.params.id}
      <Card {...info} />
    </div>
  );
};

export default DisplayBattles;
