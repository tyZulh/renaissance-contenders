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
    const url = `http://9e420d11d0ce.ngrok.io/${theme}/all`;
    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        setContenders(data);
      });
  };

  useEffect(() => {
    setRemTime(10);
    fetchContender();
    const random = [];
    for (let index = 0; index < 2; index++) {
      random.push(Math.floor(Math.random() * contenders.length));
    }
    const tempFight = [contenders[random[0]], contenders[random[1]]];
    setFighters(tempFight);
  }, [match]);

  useEffect(() => {
    setRemTime(10);
    fetchContender();
    const random = [];
    for (let index = 0; index < 2; index++) {
      random.push(Math.floor(Math.random() * contenders.length));
    }
    const tempFight = [contenders[random[0]], contenders[random[1]]];
    setFighters(tempFight);
  }, []);

  useEffect(() => {
    const rebours = setTimeout(() => {
      setRemTime(remTime - 1);
    }, 1000);

    if (remTime === 0) {
      clearInterval(rebours);
      setRemTime(10);

      const randomOne = Math.floor(
        Math.random() * Math.abs(contenders.length - 1)
      );
      let randomTwo = Math.floor(
        Math.random() * Math.abs(contenders.length - 1)
      );
      if (randomOne === randomTwo) {
        randomTwo = contenders.length - 1;
      }
      console.log(contenders.length);
      const tempFight = [contenders[randomOne], contenders[randomTwo]];
      setFighters(tempFight);
    }
    return () => {
      clearInterval(rebours);
    };
  }, [remTime]);

  return (
    <div className="battles-container">
      <Contenders {...match} />
      <p className="timer">Time Remaining : {remTime}</p>
      <div className="battles-wrapper">
        <LeftCont {...fighters[0]} theme={match} />
        <LeftCont {...fighters[1]} theme={match} />
      </div>
    </div>
  );
};

export default DisplayBattles;
