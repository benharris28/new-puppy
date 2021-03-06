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
import Tricks from './Routes/Tricks/Tricks';
import Feeding from './Routes/Feeding/Feeding';
import NavbarTest from './Components/Navbar/Navbar'
import HouseTraining from './Routes/HouseTraining/HouseTraining';
import IntroPage from './Routes/IntroPage/IntroPage';
import Users from './BackupData/Users'
import FoodApiService from './services/food-api-service'
import UsersService from './services/users-api-service'
import './App.css';

class App extends React.Component {
  state = {
    products: ProductData.products,
    food: FoodData.food,
    productCount: '',
    product_complete: '',
    food_complete: '',
    foodCount: '',
    prephome_complete: false,
    pickup_complete: false,
    tricks_complete: false,
    feeding_complete: false,
    housetrain_complete: false,
    firstDayCount: '',
    guideCount: '',
    loggedInUser: '',
    activeUser: '',
    foodItems: [],
    displayProducts: []

  }


  componentDidMount = () => {
      
    /*
    FoodApiService.getAllFood()
        .then(res => {
            console.log(res)
            this.setFood(res)
           

            })
            */

}


  setFood = (res) => {
      this.setState({
          foodItems: res
      })
  }

  setProducts = (res) => {
    this.setState({
        displayProducts: res
    })
}

  handleActiveUser = (user) => {
    this.setState({
      activeUser: user,
      prephome_complete: user.prephome_complete,
      pickup_complete: user.pickup_complete,
      tricks_complete: user.tricks_complete,
      feeding_complete: user.feeding_complete,
      housetrain_complete: user.housetrain_complete

    })
    this.handleFirstDayCounter()
  }

  handleFirstDayCounter = () => {
    const firstday = [this.state.prephome_complete, this.state.pickup_complete, this.state.tricks_complete, this.state.feeding_complete, this.state.housetrain_complete]
    const firstDayCounter = Object.values(firstday).filter(Boolean).length 
    console.log(firstDayCounter)
    this.setState({
      firstDayCount: firstDayCounter
    })
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
    
    this.setState({
      [page]: true
    })

    const id = this.state.activeUser.id

    console.log(id)
    
    const itemToComplete = {
      [page]: true,
    }
     
   
    UsersService.markComplete(id, itemToComplete)

  }

  handleLoggedInUser = () => {
    this.setState({
      loggedInUser: true
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInUser: false
    })
  }

  handleDummyUser = () => {
    const selectUser = Users.users.find(user => user.id === 1)
    console.log(selectUser)
    this.setState({
      activeUser: selectUser
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
      firstDayCount: this.state.firstDayCount,
      handleProgress: this.handleProgress,
      handleFirstDayCounter: this.handleFirstDayCounter,
      prephome_complete: this.state.prephome_complete,
      pickup_complete: this.state.pickup_complete,
      tricks_complete: this.state.tricks_complete,
      feeding_complete: this.state.feeding_complete,
      houstrain_complete: this.state.housetrain_complete,
      handleLoggedInUser: this.handleLoggedInUser,
      loggedInUser: this.state.loggedInUser,
      handleLogout: this.handleLogout,
      users: this.state.users,
      handleActiveUser: this.handleActiveUser,
      activeUser: this.state.activeUser,
      setProducts: this.setProducts,
      displayProducts: this.state.displayProducts,
      setFood: this.setFood,
      foodItems: this.state.foodItems,
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
                path={'/prephome'}
                component={PrepHome}
                />
                <Route
                exact
                path={'/pickup'}
                component={PickUpPup}
                />
                <Route
                exact
                path={'/tricks'}
                component={Tricks}
                />
                <Route
                exact
                path={'/feeding'}
                component={Feeding}
                />
                <Route
                exact
                path={'/housetrain'}
                component={HouseTraining}
                />
                <Route
                exact
                path={'/intro'}
                component={IntroPage}
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
