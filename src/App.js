import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Checklist from './Routes/Checklist/Checklist';
import LandingPage from './Routes/LandingPage/LandingPage';
import NotFoundPage from './Routes/NotFoundPage/NotFoundPage';
import Test from './Routes/Test/Test';
import RegistrationPage from './Routes/RegistrationPage/RegistrationPage';
import LoginPage from './Routes/LoginPage/LoginPage';
import Header from './Components/Header/Header';
import ApiContext from './ApiContext';
import ProductData from './BackupData/ProductData';
import FoodData from './BackupData/FoodData';
import PrepHome from './Routes/PrepHome/PrepHome';
import PickUpPup from './Routes/PickUpPup/PickUpPup';
import './App.css';

class App extends React.Component {
  state = {
    products: ProductData.products,
    food: FoodData.food,
    productCount: '',
    foodCount: '',
    prep_home: false,
    pick_up_pup: false,
    tricks: false,
    first_meal: false,
    house_train: false,
    guideCount: ''

  }

  handleProductCounter = (count) => {
    this.setState({
      productCount: count
    })
  }

  handleFoodCounter = () => {
    this.setState({
      foodCount: 1
    })
  }

  handleProgress = (page) => {
    const { prep_home, pick_up_pup, tricks, first_meal, house_train } = this.state;
    
    this.setState({
      [page]: true
    })
  }

  render() {
    const value= {
      products: this.state.products,
      food: this.state.food,
      handleProductCounter: this.handleProductCounter,
      productCount: this.state.productCount,
      handleFoodCounter: this.handleFoodCounter,
      foodCount: this.state.foodCount,
      handleProgress: this.handleProgress,
      prep_home: this.state.prep_home
    }

    console.log(this.state)
    
    
    
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
                exact
                path={'/register'}
                component={RegistrationPage}
                />
                <Route
                exact
                path={'/login'}
                component={LoginPage}
                />
                <Route
                exact
                path={'/prep-home'}
                component={PrepHome}
                />
                <Route
                exact
                path={'/pick-up-pup'}
                component={PickUpPup}
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
