import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './modules/authentication/pages/login/LoginPage';
import RegisterPage from './modules/authentication/pages/register/RegisterPage';
import Layout from './core/Layouts/Layout';
import { userService } from './core/commons/services/entity-services/user.service';


const APP_ROUTES = {
  fallbackRoutes: [
    {
      path: "/",
      exact: true,
      component: () => <Redirect to="/login" /> ,
      // isSideBar: true,
      // label: "List"
  }
  ]

}

export default class App extends Component {

  constructor() {
    super()
    const isLoggedIn = userService.isLoggedIn()
    this.state = {
      isLoggedIn: isLoggedIn
    }
  }



  async componentDidMount() {

    const isLoggedIn = userService.isLoggedIn()
    console.log(`isLoggedIn ->`, isLoggedIn);
    this.setState({ isLoggedIn })

  }

  authenticationRoute() {
    return (
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/login" />} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    )
  }

  dashboardRoute() {
    return <Layout routes={APP_ROUTES} />
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <Router>
        {
          (isLoggedIn) ? (this.dashboardRoute()) : (this.authenticationRoute())
        }
      </Router>)
  }
}

// export default App;
