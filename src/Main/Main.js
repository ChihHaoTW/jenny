import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Main.css';

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
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>

		</div>
  }
}

export default Main;