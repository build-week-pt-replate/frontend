import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function EditMUIcon(props) {
  const { classes } = props;
  return (
    <div>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab>
    </div>
  );
}

EditMUIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditMUIcon);
