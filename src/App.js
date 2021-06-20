import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useAuth0 } from '@auth0/auth0-react';
import User from './User';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyFavoriteBooks from './myFavoriteBooks';//1
import Login from './Login';
import {withAuth0} from '@auth0/auth0-react';

class App extends React.Component {
 

  render() {
    console.log('app', this.props)
    // const { isAuthenticated,} = useAuth0();its not work 

// const {isAuthenticated} = this.props.auth0;//its not work 
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  {/* {() */}
  {(this.props.auth0.isAuthenticated)?
  <MyFavoriteBooks />

  : <Login /> }
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Route exact path='/profile'/>
             
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);