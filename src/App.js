import Card from './components/card/Card'
import { useEffect, useState} from 'react'
import axios from 'axios'




function App() {
  const info = 
    {
      name: "Booba",
    url: "http://antiquipop.hypotheses.org/files/2018/01/Booba-Trone-3.jpg",
      artist: "Booba",
      nbrVote: "0",
      style: "music",
      nationality: "USA",
      comment: "good vibes"
    }

    // useEffect(() => {
    //   axios.get('')
    //   .then(res => console.log(res.data))
    // }, [] )
  

  return (
    <div className="App">
      < Card {...info}/>
    </div>
  );
}

export default App;
