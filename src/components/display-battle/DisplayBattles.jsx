import Axios from "axios";
import "./DisplayBattles.css";
import LeftCont from "../card/LeftCont";
import RightCont from "../card/RightCont";
import Contenders from "../Contenders/Contenders";
import { useEffect, useState } from "react";

const DisplayBattles = ({ match }) => {
  const [contenders, setContenders] = useState([]);
  const [fighters, setFighters] = useState([{}, {}]);
  const [remTime, setRemTime] = useState(10);

  const fetchContender = () => {
    const theme = match.params.style;
    const url = `http://1f5403262dc5.ngrok.io/${theme}/all`;
    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        setContenders(data);
      });
  };

  const chooseFighter = () => {
    const random = [];
    for (let index = 0; index < 2; index++) {
      random.push(Math.floor(Math.random() * contenders.length));
    }
    const tempFight = [contenders[random[0]], contenders[random[1]]];
    setFighters(tempFight);
    setRemTime(10);
  };

  useEffect(() => {
    fetchContender();
    console.log(fighters);
  }, [match]);

  useEffect(() => {
    fetchContender();
  }, []);

  useEffect(() => {
    chooseFighter();
  }, [contenders]);

  useEffect(() => {
    const rebours = setTimeout(() => {
      setRemTime(remTime - 1);
    }, 1000);

    if (remTime === 0) {
      clearInterval(rebours);
      chooseFighter();
    }
    return () => {
      clearInterval(rebours);
    };
  }, [remTime]);

  return (
    <div className="battles-container">
      <Contenders {...match} />
      {fighters.every((value) => value !== undefined) && (
        <p className="timer">Time Remaining : {remTime}</p>
      )}
      <div className="battles-wrapper">
        {fighters.every((value) => value !== undefined) && (
          <div>
            <LeftCont {...fighters[0]} theme={match} />
            <LeftCont {...fighters[1]} theme={match} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayBattles;
