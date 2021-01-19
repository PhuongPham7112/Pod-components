import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

let playlist = ['Pod ABC for kids', 'Pod ABC for kids', 'Pod ABC for kids', 'Pod ABC for kids'];
const useStyles = makeStyles({
  title: {
    display: 'flex',
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.title}>
        <IconButton onClick={handleClose}>
          <ClearIcon />
        </IconButton>
        <DialogTitle id="simple-dialog-title"> Saved Pods </DialogTitle>
      </div>
      
      <List>
        {playlist.map((pod) => (
          <ListItem key={pod}>
            <ListItemAvatar>
                <PlayCircleOutlineIcon color="primary" onClick={() => handleListItemClick(pod)}/>
            </ListItemAvatar>
            <ListItemText primary={pod} secondary="pod description"/>
            <ListItemSecondaryAction>
                <IconButton edge="end">
                  <BookmarkIcon onClick={() => handleListItemClick(pod)}/>
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}

        <ListItem autoFocus onClick={() => handleListItemClick('load more')}>
          <ListItemText disableTypography primary={<Typography color="secondary"> load more </Typography>}/>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogMenu() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(playlist[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography color="secondary" onClick={handleClickOpen}>
            load more
      </Typography>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}