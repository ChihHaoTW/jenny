import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/logo.svg';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Main from './Main/Main';

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
					{ this.state.menuList.map( e => {
						return <MenuItem
							className={"menu-item"} 
							onClick={this.handleClose}>
								{e}
						</MenuItem>
					})}
        </Menu>
        <Logo id="logo" />

				<Main />

      </div>
    )
  }
}

export default App;
