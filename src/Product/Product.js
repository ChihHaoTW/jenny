import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import './Product.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';

class Product extends Component {
  render() {
		return <div id="Product">
      <div className="intro">
        <Typography component="h4" variant="h4">
          周邊商品
        </Typography>
        <Typography variant="subtitle1" component="p">
          大符帖
        </Typography>
        <Typography variant="subtitle1" component="p">
          概念取自大補帖
        </Typography>
        <Typography variant="subtitle1" component="p">
          大補帖為古時民間記載治療病痛配方之書
        </Typography>
        <Typography variant="subtitle1" component="p">
          大符帖為專剋社會亂象青草茶攻略
        </Typography>
        <Typography variant="subtitle1" component="p">
          收錄辟魍全套40張符咒
        </Typography>
        <Typography variant="subtitle1" component="p">
          裝幀設計採用可掛於牆面的設計
        </Typography>
        <Typography variant="subtitle1" component="p">
          如需要使用某款符咒也可以沿虛線撕下
        </Typography>
        <Typography variant="subtitle1" component="p">
          送禮自用兩相宜
        </Typography>
      </div>

      <img src={img1} className="img center narrow" />
      <img src={img2} className="img center narrow" />
      <img src={img3} className="img center narrow" />

      <div className="intro">
        <Typography variant="subtitle1" component="p">
          酷卡
        </Typography>
        <Typography variant="subtitle1" component="p">
          可依個人需求挑選喜歡的酷卡符咒
        </Typography>
        <Typography variant="subtitle1" component="p">
          貼在隨處可見
        </Typography>
        <Typography variant="subtitle1" component="p">
          或想祈求好運之處
        </Typography>
        <Typography variant="subtitle1" component="p">
          達到趨吉避邪的功效
        </Typography>
      </div>

      <img src={img4} className="img center wide" />
      <img src={img5} className="img center narrow" />

      <div className="intro">
        <Typography variant="subtitle1" component="p">
          明信片
        </Typography>
        <Typography variant="subtitle1" component="p">
          將符咒附在明信片裡
        </Typography>
        <Typography variant="subtitle1" component="p">
          寄件者可傳達祝福的心意
        </Typography>
        <Typography variant="subtitle1" component="p">
          收件者可自行撕下收藏
        </Typography>
      </div>

      <div className="img two-img-con">
        <img src={img6} />
        <img src={img7} />
      </div>

      <div className="intro">
        <Typography variant="subtitle1" component="p">
          貼紙
        </Typography>
        <Typography variant="subtitle1" component="p">
          分為魑魅魍魎貼紙以及符咒貼紙
        </Typography>
        <Typography variant="subtitle1" component="p">
          小巧可愛的貼紙
        </Typography>
        <Typography variant="subtitle1" component="p">
          可隨處貼於賞心悅目之處
        </Typography>
      </div>

      <div className="img left-img-con">
        <img src={img8} />
      </div>

      <div className="img right-img-con">
        <img src={img9} />
      </div>

		</div>
  }
}

export default Product;
