import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function RequestCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
          {props.request.locationName}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.request.date} <br />
          {props.request.time} <br />
          {props.request.foodDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept Request</Button>
      </CardActions>
    </Card>
  );
}

RequestCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestCard);