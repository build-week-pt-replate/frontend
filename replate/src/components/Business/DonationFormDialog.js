import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class DonationFormDialog extends Component {

  render() {
    const {
      onClose,
      isOpen,
      handleInputChange,
      formDialogData: {
        locationName,
        date,
        time,
        foodDescription,
        comment
    }} = this.props;

    return (
      <div>
        <Dialog
          open={isOpen}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Schedule New PickUp
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please make your donation.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="locationName"
              name="locationName"
              label="Location Name"
              type="text"
              value={locationName}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="date"
              name="date"
              label="Date"
              type="date"
              value={date}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="time"
              name="time"
              label="Time"
              type="time"
              value={time}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="foodDescription"
              name="foodDescription"
              label="Food Description"
              type="text"
              multiline={true}
              value={foodDescription}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="comment"
              name="comment"
              label="Additional Comments"
              type="text"
              multiline={true}
              value={comment}
              onChange={handleInputChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              Next
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
