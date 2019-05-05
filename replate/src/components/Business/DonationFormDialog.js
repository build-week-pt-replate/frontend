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
      updateStepNumber,
      scheduleDonation,
      formDialogData: {
        locationName,
        locationStreet,
        locationCity,
        locationState,
        locationZip,
        requestDate,
        requestTime,
        foodDescription,
        comment,
        stepNumber
    }} = this.props;

    const form = (
      <>
        <DialogTitle id="form-dialog-title">
          Schedule New Pick Up
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please make your donation.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="locationName"
            name="locationName"
            label="Location Name"
            type="text"
            value={locationName}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="locationStreet"
            name="locationStreet"
            label="Street"
            type="text"
            value={locationStreet}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="locationCity"
            name="locationCity"
            label="City"
            type="text"
            value={locationCity}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="locationState"
            name="locationState"
            label="State"
            type="text"
            value={locationState}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="locationZip"
            name="locationZip"
            label="Zip"
            type="text"
            value={locationZip}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="requestDate"
            name="requestDate"
            label="Date"
            type="date"
            value={requestDate}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="requestTime"
            name="requestTime"
            label="Time"
            type="time"
            value={requestTime}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="foodDescription"
            name="foodDescription"
            label="Food Description"
            type="text"
            multiline
            value={foodDescription}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="comment"
            name="comment"
            label="Additional Comments"
            type="text"
            multiline
            value={comment}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateStepNumber} color="primary">
            Next
          </Button>
        </DialogActions>
      </>
    )

    const confirmationView = (
      <>
        <DialogContent>
          <DialogTitle>
            Please verify your donation details
          </DialogTitle>
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Location Name:  {locationName}
          </DialogContentText>

          <DialogContentText>
            Street:  {locationStreet}
          </DialogContentText>

          <DialogContentText>
            City:  {locationCity}
          </DialogContentText>

          <DialogContentText>
            State:  {locationState}
          </DialogContentText>

          <DialogContentText>
            Zip:  {locationZip}
          </DialogContentText>

          <DialogContentText>
            Pick Up Date:  {requestDate}
          </DialogContentText>

          <DialogContentText>
            Pick Up Time:  {requestTime}
          </DialogContentText>

          <DialogContentText>
            Food Description:  {foodDescription}
          </DialogContentText>

          <DialogContentText>
            Additional Comments:  {comment}
          </DialogContentText>

          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={scheduleDonation} color="primary">
              Submit
            </Button>
          </DialogActions>
        </DialogContent>
      </>
    )

    return (
      <div>
        <Dialog
          open={isOpen}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
        >
          {
            stepNumber === 1 ? form : confirmationView

          }

        </Dialog>
      </div>
    );
  }
}
