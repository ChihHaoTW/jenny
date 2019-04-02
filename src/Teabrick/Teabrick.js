import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Teabrick.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';

class Teabrick extends Component {
  render() {
		return <div id="Teabrick">
      <div className="intro">
        <Typography className="has-sub" component="h4" variant="h4">
          茶磚 
        </Typography>
        <Typography component="h5" variant="h5">
          化食符
        </Typography>
        <Typography variant="subtitle1" component="p">
          化食符用法為將符化於水中後飲用
        </Typography>
        <Typography variant="subtitle1" component="p">
          辟魍的茶磚上有符咒功效壓印
        </Typography>
        <Typography variant="subtitle1" component="p">
          可直接化於熱水後飲用
        </Typography>
        <Typography variant="subtitle1" component="p">
          因此將其比喻為化食符
        </Typography>
        <Typography variant="subtitle1" component="p">
          茶磚分為個包裝以及禮盒包裝
        </Typography>
        <Typography variant="subtitle1" component="p">
          每款個包裝各是八款不同功效的茶磚
        </Typography>
        <Typography variant="subtitle1" component="p">
          而禮盒包裝為綜合口味
        </Typography>
      </div>

      <img src={img1} className="img center normal" />
      <img src={img2} className="img center normal" />

      <div className="img two-img-con">
        <img src={img3} />
        <img src={img4} />
      </div>

      <div className="img left-img-con">
        <img src={img5} />
      </div>

      <div className="img right-img-con">
        <img src={img6} />
      </div>

      <div className="img left-img-con">
        <img src={img7} />
      </div>

      <div className="img right-img-con">
        <img src={img8} />
      </div>

		</div>
  }
}

export default Teabrick;
