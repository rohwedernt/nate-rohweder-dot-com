import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PostAnimator from './PostAnimator';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: theme.mixins.gutters({
    marginTop: 40,
    paddingTop: 16,
    paddingBottom: 16,
    whiteSpace: 'pre-line',
    overflow: 'auto'
  }),
});

const postStyle = {
    fontFamily: 'monospace',
    fontSize: '32px',
    textAlign: 'center',
    webkitTextStroke: '1px #808080',
    color: 'white',
    paddingBottom: '16px'
}

const avatarStyle = {
    float: 'left',
    width: '300px',
    height: '300px',
    borderRadius: '5px',
    margin: '0 20px 20px 0',
    border: '2px solid #383838'
}



function Post(props) {
  if(props.postData) {
    const title = props.postData.title;
    const content = props.postData.content;
    
    return(
      <PostAnimator>
        <Paper className={props.classes.root} elevation={4} style={{maxHeight: 600, overflow: 'scroll'}}>
          <div style={postStyle}>{title}</div>
          <Typography component="p">
            {/* <Avatar style={avatarStyle} src={img} className={props.classes.avatar} /> */}
            <div dangerouslySetInnerHTML={{ __html: content}} />
          </Typography>
        </Paper>
      </PostAnimator>
    );
  } else return <div />
}

export default withStyles(styles)(Post);
