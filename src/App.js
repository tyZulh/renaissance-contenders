import Card from './components/card/Card'




function App() {
  const info = 
    {
      name: "Kanye",
      url: "https://i2-prod.mirror.co.uk/incoming/article6982466.ece/ALTERNATES/s615b/Kanye-West.jpg",
      artist: "Kanye",
      nbrVote: "0",
      style: "music",
      nationality: "USA",
      comment: "good vibes"
    }
  

  return (
    <div className="App">
      < Card {...info}/>
    </div>
  );
}

export default App;
