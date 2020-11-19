import { Route, Switch } from 'react-router-dom'
import DisplayBattles from './components/display-battle/DisplayBattles';
import Navigation from './components/nav/Navigation'






function App() {


  return (
    <div className="App">

      <Navigation />
      <Switch>
        <Route path="/:style" component={DisplayBattles} />
      </Switch>
    </div>
  );
}



export default App;