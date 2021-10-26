import './App.scss';
import Header from './components/Header/Header';
import Listing from './components/Listing';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Listing />
      </Route>
    </Switch>
  );
}

export default App;
