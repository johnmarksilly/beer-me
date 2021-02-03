import './App.css';
import CatalogLayout from './layout/CatalogLayout/CatalogLayout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BeerLayout from './layout/BeerLayout/BeerLayout';

function App() {
  return (
    <Router>
      <div style={{marginBottom: '2rem'}}>
        <h1 style={{textAlign: 'center', fontSize: '4rem', marginBottom: 0}}>BEER(me)</h1>
        <h3 style={{textAlign: 'center'}}>Recipes for aspiring brewmasters</h3>
      </div>
      <Switch>
        <Route exact path='/' component={CatalogLayout} />
        <Route path='/beer/:id' component={BeerLayout} />
      </Switch>
    </Router>
  );
}

export default App;
