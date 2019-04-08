import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InstagramEmbed from 'react-instagram-embed';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Main.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

import g1 from './img/gallery/1.jpg';
import g2 from './img/gallery/2.jpg';
import g3 from './img/gallery/3.jpg';
import g4 from './img/gallery/4.jpg';
import g5 from './img/gallery/5.jpg';
import g6 from './img/gallery/6.jpg';
import g7 from './img/gallery/7.jpg';
import g8 from './img/gallery/8.jpg';

import url from './url.txt';

class Main extends Component {
  render() {
    const gImgs = [g1, g2, g3, g4, g5, g6, g7, g8]
    const images = []
    gImgs.forEach(e => images.push( {original: e, thumbnail: e} ))
		return <div id="Main">

      <ImageGallery items={images} lazyLoad autoPlay showPlayButton={false} />
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
        url={url}
			  hideCaption={false}
			  containerTagName='div'
			  injectScript
			/>


		</div>
  }
}

export default Main;
