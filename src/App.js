import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Badges from './pages/Badges';
import BadgeNew from './pages/BadgeNew'
import Layout from './components/Layout'

function App() {
  return (
	<BrowserRouter>
	  <Layout>
	  	<Switch>
	  	  <Route exact path="/badges/new" component={BadgeNew}/>
	  	  <Route exact path="/badges" component={Badges}/>
	  	</Switch>
	  </Layout>
	</BrowserRouter>
  )
}

export default App;
