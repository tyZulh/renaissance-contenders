// import Axios from "axios";
import "./DisplayBattles.css";
import LeftCont from "../card/LeftCont";
import RightCont from "../card/RightCont";
import Contenders from "../Contenders/Contenders";

const info = [
  {
    name: "Kanye",
    url:
      "https://i2-prod.mirror.co.uk/incoming/article6982466.ece/ALTERNATES/s615b/Kanye-West.jpg",
    artist: "Kanye",
    nbrVote: "0",
    style: "music",
    nationality: "USA",
    comment: "good vibes",
  },
  {
    name: "Booba",
    url: "http://antiquipop.hypotheses.org/files/2018/01/Booba-Trone-3.jpg",
    artist: "Booba",
    nbrVote: "0",
    style: "music",
    nationality: "USA",
    comment: "good vibes",
  },
];

const DisplayBattles = ({ match }) => {
  //   const url = "";
  //   Axios.get(url)
  //     .then((res) => res.data)
  //     .then((data) => console.log(data));

  return (
    <div className="battles-container">
      <Contenders />
      <div className="battles-wrapper">
        <LeftCont {...info[0]} />
        <RightCont {...info[1]} />
      </div>
    </div>
  );
};

export default DisplayBattles;
