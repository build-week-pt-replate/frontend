import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function DeleteMUIcon(props) {
  const { classes } = props;
  return (
    <div>
      <Fab disabled aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

DeleteMUIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteMUIcon);
