import Axios from "axios";
import "./DisplayBattles.css";
import LeftCont from "../card/LeftCont";
import RightCont from "../card/RightCont";
import Contenders from "../Contenders/Contenders";
import { useEffect, useState } from "react";
import arrowLogo from '../assets/arrowLogo.png'

const DisplayBattles = ({ match }) => {
  const [contenders, setContenders] = useState([]);
  const [fighters, setFighters] = useState([{}, {}]);
  const [remTime, setRemTime] = useState(10);

  const fetchContender = () => {
    const theme = match.params.style;
    const url = `http://3cbbd8157824.ngrok.io/${theme}/all`;
    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
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
    // console.log('plop') 
    setRemTime(10);
    fetchContender();    
    const tempFight = [contenders[0], contenders[1]];
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
      <p className="timer">{remTime}'</p>
      <div className="battles-wrapper">
        <LeftCont {...fighters[0]} theme={match} />
        <div className="versus">
          <img className='icon-central' src="https://i.postimg.cc/KvV8nKWW/logo2.png" alt="vs logo"/>
        </div>
        <LeftCont {...fighters[1]} theme={match} />
      </div>
    </div>
  );
};

export default DisplayBattles;
