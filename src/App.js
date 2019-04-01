import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';

import Main  from './Main/Main';
import Story from './Story/Story';

import fb     from './img/bottom/fb.png';
import ig     from './img/bottom/ig.png';
import shopee from './img/bottom/shopee.png';
import mail   from './img/bottom/mail.png';
import sheet  from './img/bottom/sheet.png';

class App extends Component {
  state = {
    anchorEl: null,
		menuList: [
      {zh: '品牌故事', en: 'story'}, 
      {zh: '茶包',     en: 'teabag'},
      {zh: '茶磚',     en: 'teabrick'},
      {zh: '青草茶',   en: 'herbtea'},
      {zh: '符咒',     en: 'charm'},
      {zh: '周邊商品', en: 'product'}
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
                component={Link}
                to={`/${e.en}/`}
                key={i}
			  				className={"menu-item"} 
			  				onClick={this.handleClose}>
			  					{e.zh}
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
          <Route path="/story/" component={Story} />

          <ButtonBase 
            component={Link}
            to="/"
            disableRipple={true}
            disableTouchRipple={true}
          >
            <Logo id="logo" />
          </ButtonBase>
          <p className="logo-text">專剋現代社會亂象青草茶舖</p>

          <div className="bottom">
            <IconButton>
              <img className="bottom-icon" src={fb} />
            </IconButton>
            <IconButton>
              <img className="bottom-icon" src={ig} />
            </IconButton>
            <IconButton>
              <img className="bottom-icon" src={shopee} />
            </IconButton>
            <IconButton>
              <img className="bottom-icon" src={mail} />
            </IconButton>
            <IconButton>
              <img className="bottom-icon" src={sheet} />
            </IconButton>
          </div>

        </div>
      </Router>
    )
  }
}

export default App;
