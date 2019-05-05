import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    marginLeft: 26,
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
  media: {
    height: 140,
    marginBottom: 10,
  },
};

const DonationRequest = (props) => {
  const { classes, imagePath, deleteDonation } = props;

  return (
    <Card className={classes.card}>
      <CardContent>

        <CardMedia
          className={classes.media}
          image={imagePath}
          title="Contemplative Reptile"
        />

        <Typography gutterBottom variant="h5" component="h2">
          {props.request.locationName}
        </Typography>

        <Typography component="p">
          Date: {props.request.requestDate} <br />
          Request Time: {props.request.requestTime} <br />
          Food Description: {props.request.foodDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
                color="primary"
                onClick={() => {deleteDonation(props.request.id)}}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

DonationRequest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DonationRequest);
