import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

import Main from './Main/Main';

import FbIcon from './img/bottom/fb.png';

class App extends Component {
  state = {
    anchorEl: null,
		menuList: [
			'品牌故事',
			'茶包',
			'茶磚',
			'青草茶',
			'符咒',
			'周邊商品'
		]
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    return (
      <Router>
        <div className="App">
          <Fab
            id="fab"
			  		className={anchorEl ? 'hidden' : null}
            aria-owns={anchorEl ? 'menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon />
          </Fab>
         <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
			  		MenuListProps={{className: "bk2"}}
          >
			  		{ this.state.menuList.map( (e, i) => {
			  			return <MenuItem
                key={i}
			  				className={"menu-item"} 
			  				onClick={this.handleClose}>
			  					{e}
			  			</MenuItem>
			  		})}
          </Menu>

          <ButtonBase 
            component={Link}
            to="/"
            disableRipple={true}
            disableTouchRipple={true}
          >
            <Logo id="logo" />
          </ButtonBase>

          <Route exact path="/" component={Main} />

          <ButtonBase 
            component={Link}
            to="/"
            disableRipple={true}
            disableTouchRipple={true}
          >
            <Logo id="logo" />
          </ButtonBase>
          <p className="logo-text">專剋現代社會亂象青草茶舖</p>

          <IconButton>
            <img src={FbIcon} />
            <img src={FbIcon} />
          </IconButton>

        </div>
      </Router>
    )
  }
}

export default App;
