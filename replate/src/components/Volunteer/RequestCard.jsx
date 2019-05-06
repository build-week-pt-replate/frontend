import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
    marginLeft: 26
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 140,
    marginBottom: 10
  }
};

const RequestCard = props => {
  const { classes, imagePath } = props;

  return (
    <Card className={`${classes.card} card-container`}>
      <CardMedia
        className={classes.media}
        image={imagePath}
        title="Contemplative Reptile"
      />

      <CardContent className="card-content-words">
        <Typography variant="h5" component="h2">
          {props.request.locationName}
        </Typography>

        <Typography component="p">
          Address: {props.request.locationStreet}
          <br />
          City: {props.request.locationCity}
          <br />
          Request Time:{props.request.requestTime} <br />
          Description: {props.request.foodDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="button-container">
          <Button
            size="small"
            color="secondary"
            value={props.request}
            onClick={() => {
              props.request.volunteerId !== null
                ? props.completeRequest(props.request)
                : props.acceptRequest(props.request);
            }}
          >
            {props.request.volunteerId !== null ? "Complete" : "Accept"}
          </Button>

          <Button
            size="small"
            color="secondary"
            value={props.request}
            onClick={() => {
              props.removeRequest(props.request);
            }}
          >
            {props.request.volunteerId !== null ? "Cancel" : null}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

RequestCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RequestCard);
