import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import './Teabag.css';

class Teabag extends Component {
  render() {
		return <div id="Teabag">
      <div className="intro">
        <Typography className="has-sub" component="h4" variant="h4">
          茶包 
        </Typography>
        <Typography component="h5" variant="h5">
          煎藥符
        </Typography>
        <Typography variant="subtitle1" component="p">
          煎藥符用法為搭配藥方煎煮後飲用
        </Typography>
        <Typography variant="subtitle1" component="p">
          辟魍的茶包內含對抗不同亂象族群所需的功效
        </Typography>
        <Typography variant="subtitle1" component="p">
          並將茶包包裝結合符咒元素設計
        </Typography>
        <Typography variant="subtitle1" component="p">
          藉此讓消費者達到心靈慰藉以及身體上實質的益處
        </Typography>
      </div>



		</div>
  }
}

export default Teabag;
