import Axios from "axios";
import "./DisplayBattles.css";
import LeftCont from "../card/LeftCont";
import RightCont from "../card/RightCont";
import Contenders from "../Contenders/Contenders";
import { useEffect, useState } from "react";

const DisplayBattles = ({ match }) => {
  const [contenders, setContenders] = useState([]);
  const [fighters, setFighters] = useState([{}, {}]);
  const [remTime, setRemTime] = useState(20);

  const fetchContender = async () => {
    const theme = match.params.style;
    const url = `http://9e420d11d0ce.ngrok.io/${theme}/all`;
    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setContenders(data);
      });
  };

  useEffect(() => {
    fetchContender().then(() => {
      const random = [];
      for (let index = 0; index < 2; index++) {
        random.push(Math.floor(Math.random() * contenders.length));
      }
      const tempFight = [contenders[random[0]], contenders[random[1]]];
      setFighters(tempFight);
    });
  }, []);

  useEffect(() => {
    const rebours = setTimeout(() => {
      setRemTime(parseInt(remTime) - 1);
    }, 1000);
    if (remTime === 0) {
      clearInterval(rebours)
      fetchContender();
      setRemTime(20);
    }
  }, [remTime]);

  return (
    <div className="battles-container">
      <Contenders />
      <p>Time Remaining : {remTime}</p>
      <div className="battles-wrapper">
        <LeftCont {...fighters[0]} />
        <RightCont {...fighters[1]} />
      </div>
    </div>
  );
};

export default DisplayBattles;
