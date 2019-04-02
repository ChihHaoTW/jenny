import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Charm.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

class Charm extends Component {
  render() {
		return <div id="Charm">
      <div className="intro">
        <Typography component="h4" variant="h4">
          符咒
        </Typography>
        <Typography variant="subtitle1" component="p">
          符咒設計依亂象族群分為八大項
        </Typography>
        <Typography variant="subtitle1" component="p">
          每一項有一張專剋此族群的符咒
        </Typography>
        <Typography variant="subtitle1" component="p">
          另外再依其行為細分為四張行為符咒
        </Typography>
        <Typography variant="subtitle1" component="p">
          以豬隊友為例，內含豬隊友退散符咒
        </Typography>
        <Typography variant="subtitle1" component="p">
          以及立馬回訊息、別來搶功勞、無貢獻勿亂、沒藉口缺席四張行為符咒
        </Typography>
        <Typography variant="subtitle1" component="p">
          符咒背面則有對抗此族群需要的青草茶成份與符咒解析
        </Typography>
      </div>

      <img src={img1} className="img center wide" />

      <img src={img2} className="img center narrow" />
      <img src={img3} className="img center narrow" />

		</div>
  }
}

export default Charm;
