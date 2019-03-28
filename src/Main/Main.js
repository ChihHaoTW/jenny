import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InstagramEmbed from 'react-instagram-embed';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import './Main.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

class Main extends Component {
  render() {
		return <div id="Main">
			<InstagramEmbed
			  url='https://www.instagram.com/p/BvdPaOqHQDu/'
			  hideCaption={false}
			  containerTagName='div'
			  injectScript
			/>

      <Paper className="paper" elevation={1}>
				<Link to="test">
					<CardMedia image={img1} />
				</Link>
				<Link to="test">
					<CardMedia image={img2} />
				</Link>
				<Link to="test">
					<CardMedia image={img3} />
				</Link>
				<Link to="test">
					<CardMedia image={img4} />
				</Link>

      </Paper>

		</div>
  }
}

export default Main;
