import { Route, Switch } from 'react-router-dom'
import DisplayBattles from './components/display-battle/DisplayBattles';
import Navigation from './components/nav/Navigation'
import Header from './components/header/Header'





function App() {


  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route path="/:style" component={DisplayBattles} />
      </Switch>
    </div>
  );
}



export default App;