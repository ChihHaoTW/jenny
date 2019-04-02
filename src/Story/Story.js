import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Story.css';

import img1 from "./img/1.png";

class Story extends Component {
  render() {
		return <div id="Story">
      <div className="intro">
        <Typography component="h4" variant="h4">
          品牌故事
        </Typography>

        <Typography variant="subtitle1" component="p">
          「辟」為避邪
			  </Typography>
        <Typography variant="subtitle1" component="p">
          「魍」則是魑魅魍魎
			  </Typography>
        <Typography variant="subtitle1" component="p">
          亦代表現代社會亂象族群
			  </Typography>
        <Typography variant="subtitle1" component="p">
          希望透過符咒再設計
			  </Typography>
        <Typography variant="subtitle1" component="p">
          以有趣的方式表達大家的心聲
			  </Typography>
      </div>

      <img className="center wide" src={img1} />

      <div className="intro">
        <Typography variant="subtitle1" component="p">
          辟魍將現代亂象族群分為
			  </Typography>
        <Typography variant="subtitle1" component="p">
          綠茶婊、豬隊友、慣老闆、酸民、三寶、大媽、屁孩、奧客
			  </Typography>
        <Typography variant="subtitle1" component="p">
          並且針對對抗不同亂象族群
			  </Typography>
        <Typography variant="subtitle1" component="p">
          發展不同的青草配方
			  </Typography>
      </div>
      <div className="intro">
        <Typography variant="subtitle1" component="p">
          滾滾豬公茶:增強體力對抗豬隊友
			  </Typography>
        <Typography variant="subtitle1" component="p">
          浪子回頭茶:修身養性不怕小屁孩
			  </Typography>
        <Typography variant="subtitle1" component="p">
          一婊人殘茶:提神醒腦看清綠茶婊
			  </Typography>
        <Typography variant="subtitle1" component="p">
          闆上砸釘茶:照顧眼睛緊盯慣老闆
			  </Typography>
        <Typography variant="subtitle1" component="p">
          客己慎行茶:提升腦力抵擋奧客
			  </Typography>
        <Typography variant="subtitle1" component="p">
          破口大媽茶:滋潤喉嚨擊退大媽
			  </Typography>
        <Typography variant="subtitle1" component="p">
          無駕之寶茶:心平氣和避開三寶
			  </Typography>
        <Typography variant="subtitle1" component="p">
          酸鹼中和茶:體質去酸瓦解酸民
			  </Typography>
      </div>

		</div>
  }
}

export default Story;
