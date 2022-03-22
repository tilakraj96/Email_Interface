import * as React from 'react';
import './ComposeEmail.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ComposeEmail() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"  className='Compose' onClick={handleClickOpen}>
        Compose Mail
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <span>To</span>
          <TextField
            autoFocus
            margin="dense"
            id="To"
            label="Email Address"
            type ='email'
            size="small"
            fullWidth
            variant="outlined"
          />
          <span>CC</span>
          <TextField
            autoFocus
            margin="dense"
            id="cc"
            size="small"
            label="Email Address"
            type ='email'
            fullWidth
            variant="outlined"
          />
          <span>Subject</span>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type ='text'
            size="small"
            fullWidth
            variant="outlined"
          />
          <span>Body</span>
          <TextField
            multiline={true}
            rows={7}
            autoFocus
            margin="dense"
            id="body"
            label="Body"
            type ='text'
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}