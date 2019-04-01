import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import './Herbtea.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';

class Herbtea extends Component {
  render() {
		return <div id="Herbtea">
      <div className="intro">
        <Typography className="has-sub" component="h4" variant="h4">
          青草茶
        </Typography>
        <Typography component="h5" variant="h5">
          帶身符
        </Typography>
        <Typography variant="subtitle1" component="p">
          帶身符用法為隨身攜帶
        </Typography>
        <Typography variant="subtitle1" component="p">
          可趨吉避邪
        </Typography>
        <Typography variant="subtitle1" component="p">
          辟魍提供容量大小方便攜帶的瓶裝青草茶
        </Typography>
      </div>

      <img src={img1} className="img center normal" />
      <img src={img2} className="img center normal" />

		</div>
  }
}

export default Herbtea;
