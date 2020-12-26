import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Badges from './pages/Badges';
import BadgeNew from './pages/BadgeNew'

function App() {
  return (
	<BrowserRouter>
	  <Switch>
	    <Route exact path="/badges/new" component={BadgeNew}/>
	    <Route exact path="/badges" component={Badges}/>
	  </Switch>
	</BrowserRouter>
  )
}

export default App;
