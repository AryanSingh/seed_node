import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import img from '../images/background.png';

import Home from './pages/Home'
import Battles from './pages/Battles'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import styled from 'styled-components';
import logo from '../logo.svg'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <AppWrapper className="App">
        <Switch>
          <Route path="/" exact component={Battles} />
          <Route path="/battles" component={Battles} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </AppWrapper>
    )
  }
}

const AppWrapper = styled.div`
  z-index: 1;
`;



