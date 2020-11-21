import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import DisplayBattles from './components/display-battle/DisplayBattles';
import Navigation from './components/nav/Navigation'
import React from 'react'

export const IziContext = React.createContext('izi')


function App() {
  const [plop, setPlop] = useState(false)

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <IziContext.Provider value={[plop,setPlop]}>
          
          <Route path="/:style" component={DisplayBattles} />
        </IziContext.Provider >
      </Switch>
    </div>
  );
}



export default App;