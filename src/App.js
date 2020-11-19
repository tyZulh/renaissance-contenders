import { Route, Switch } from 'react-router-dom'
import Navigation from './components/nav/Navigation'


const test = ({ match }) => {
  return (
    <div style={{ marginTop: '5em' }}>{match.params.style}</div>
  )
}



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/:style" component={test} />
      </Switch>
    </div>
  );
}



export default App;