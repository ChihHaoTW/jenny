import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/logo.svg';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fab id="fab">
          <MenuIcon />
        </Fab>
        <Logo id="logo" />

      </div>
    );
  }
}

export default App;
