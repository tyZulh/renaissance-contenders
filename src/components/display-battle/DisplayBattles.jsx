import Axios from "axios";
import "./DisplayBattles.css";
import LeftCont from "../card/LeftCont";
import RightCont from "../card/RightCont";
import Contenders from "../Contenders/Contenders";
import { useEffect, useState,useContext } from "react";
import arrowLogo from '../assets/arrowLogo.png'
import { IziContext } from '../../App'

const DisplayBattles = ({ match }) => {
  const [contenders, setContenders] = useState([]);
  const [fighters, setFighters] = useState([{}, {}]);
  const [remTime, setRemTime] = useState(10);
  const conto = useContext(IziContext)

  const fetchContender = () => {
    const theme = match.params.style;
    const url = `http://citizen-court-api.captain.citizen-court.tech/${theme}/all`;
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
      conto[1](!conto[0])
    }
    return () => {
      clearInterval(rebours);
    };
  }, [remTime]);

  return (
    <div className="battles-container">
      <Contenders {...match} />
      <div className='timer-container'>
        <div id="timer"> {remTime} </div>
      </div>
      <div className="battles-wrapper">
       {fighters.every(x => x !== undefined) &&  <LeftCont {...fighters[0]} theme={match} />}
        <div className="versus">
          <p className="logo-middle">&</p>
        </div>
        {fighters.every(x => x !== undefined) &&  <RightCont {...fighters[1]} theme={match} />}
      </div>
    </div>
  );
};

export default DisplayBattles;
