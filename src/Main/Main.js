import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InstagramEmbed from 'react-instagram-embed';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Main.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

class Main extends Component {
  render() {
		return <div id="Main">

			<div className="intro">
        <Typography variant="subtitle1" component="p">
					辟魍是專剋社會亂象青草茶舖，將社會亂象比喻為魑魅魍魎
				</Typography>
        <Typography variant="subtitle1" component="p">
					而青草茶比喻為符水，以對抗不同族群所需功效為配方
				</Typography>
        <Typography variant="subtitle1" component="p">
					透過詼諧諷刺的符咒再設計包裝青草茶、茶磚、茶包等商品。
				</Typography>
				
			</div>

      <Paper className="paper" elevation={1}>
        <Link to="/charm/">
					<CardMedia image={img1} />
				</Link>
        <Link to="/teabag/">
					<CardMedia image={img2} />
				</Link>
        <Link to="/teabrick/">
					<CardMedia image={img3} />
				</Link>
        <Link to="/herbtea/">
					<CardMedia image={img4} />
				</Link>

      </Paper>

			<Paper className="news" elevation={1}>
        <Typography variant="h4" component="h3">
					NEWS
        </Typography>
      </Paper>

			<InstagramEmbed
        url='https://www.instagram.com/p/BvtsxV_nT1J/'
			  hideCaption={false}
			  containerTagName='div'
			  injectScript
			/>


		</div>
  }
}

export default Main;
