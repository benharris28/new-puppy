import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Checklist from './Routes/Checklist/Checklist';
import LandingPage from './Routes/LandingPage/LandingPage';
import NotFoundPage from './Routes/NotFoundPage/NotFoundPage';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
       <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/checklist'}
              component={Checklist}
              />
            
            <Route
              component={NotFoundPage}
            />
          </Switch>
    </div>
  )
}
}

export default App;
