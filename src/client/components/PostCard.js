import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: '15px',
    float: 'left'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let id = this.props.postId;
    this.props.setId(id)
    this.props.history.push("post/" + id);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.image}
          title={this.props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.title}
          </Typography>
          <Typography component="p">
          {this.props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.routeChange} size="small" color="primary">
            More
          </Button>
        </CardActions>
      </Card>
    </div>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter((withStyles(styles)(PostCard)));
