import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar>
          </Toolbar>
        </AppBar>
        <MenuIcon />
      </div>
    );
  }
}

export default App;
