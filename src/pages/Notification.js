import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Typography } from "@material-ui/core";
import notidata from './notidata.js'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    alignItems: 'center',
    width: 'max-content',
    margin: 'auto',
    border: 'solid #9E9E9E thin',
    borderRadius: '10px'
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.primary,
  },
  notification: {
    alignSelf: 'flex-start'
  }
}));

export default function Notification() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <Typography className={classes.notification} color="primary" variant="h3"> Notification </Typography>
      <List className={classes.list}>
        {notidata.map((notification) => (
          <div>
            {notification.type === 'Pod New Votes' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.votes} ${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> Your Pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> {notification.pod} </Typography> got {notification.votes} new votes  <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography> </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Playlist Follower' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> followed your playlist <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> {notification.playlist} </Typography> <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography> </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Profile Follower' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> followed your profile <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography> </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Pod Response' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> responded to your pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> {notification.pod} </Typography> <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography> </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Pod Deleted' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> Owner of playlist <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> {notification.playlist} </Typography> deleted your pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> {notification.pod} </Typography> <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography> </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Response Deleted' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> Owner of pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> {notification.pod} </Typography> deleted your response <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography> </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
          </div>
        ))}
      </List>
    </div>
  );
}
