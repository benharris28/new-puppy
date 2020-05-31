import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Checklist from './Routes/Checklist/Checklist';
import LandingPage from './Routes/LandingPage/LandingPage';
import NotFoundPage from './Routes/NotFoundPage/NotFoundPage';
import Test from './Routes/Test/Test';
import Header from './Components/Header/Header';
import ApiContext from './ApiContext';
import ProductData from './BackupData/ProductData';
import FoodData from './BackupData/FoodData';
import './App.css';

class App extends React.Component {
  state = {
    products: ProductData.products,
    food: FoodData.food
  }

  render() {
    const value= {
      products: this.state.products,
      food: this.state.food
    }

  return (
    <ApiContext.Provider value={value}>
      <div className="App">
        <header className='App_header'>
            <Header 
              locale={this.props.match}/>
          </header>
        

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
                exact
                path={'/test'}
                component={Test}
                />
              
              <Route
                component={NotFoundPage}
              />
            </Switch>
      </div>
    </ApiContext.Provider>
  )
}
}

export default App;
