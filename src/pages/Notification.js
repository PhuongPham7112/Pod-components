import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from 'avataaars';
import Divider from '@material-ui/core/Divider';
import { Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import notidata from './notidata.js'

const UserAvatar = ({ size }) => {
  const diameter = (size === "large") ? 45 : 30;
  return (
    <Avatar
      style={{ width: diameter, height: diameter }}
      avatarStyle='Circle'
      topType='WinterHat1'
      accessoriesType='Blank'
      hatColor='Red'
      facialHairType='Blank'
      clotheType='BlazerShirt'
      eyeType='Default'
      eyebrowType='Default'
      mouthType='Default'
      skinColor='Light'
    />
  )
}

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
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.container}>
      <Typography className={classes.notification} color="primary" variant="h4"> Notification </Typography>
      <List className={classes.list}>
        {notidata.map((notification) => (
          <div>
            {notification.type === 'Pod New Votes' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <UserAvatar size="large"/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.votes} ${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> Your Pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> <Link href="#" onClick={preventDefault} color="inherit"> {notification.pod} </Link></Typography> got {notification.votes} new votes  <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography>.</Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Playlist Follower' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <UserAvatar size="large"/>
                </ListItemAvatar>
                <ListItemText primary={<Typography> <Link href="#" onClick={preventDefault} color="inherit"> {notification.title} </Link> </Typography>} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> followed your playlist <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> <Link href="#" onClick={preventDefault} color="inherit"> {notification.playlist} </Link> </Typography> <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography>. </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Profile Follower' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <UserAvatar size="large"/>
                </ListItemAvatar>
                <ListItemText primary={<Typography> <Link href="#" onClick={preventDefault} color="inherit"> {notification.title} </Link> </Typography>} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> followed your profile <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography>. </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Pod Response' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <UserAvatar size="large"/>
                </ListItemAvatar>
                <ListItemText primary={<Typography> <Link href="#" onClick={preventDefault} color="inherit"> {notification.title} </Link> </Typography>} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> responded to your pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> <Link href="#" onClick={preventDefault} color="inherit"> {notification.pod} </Link> </Typography> <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography>. </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Pod Deleted' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <UserAvatar size="large"/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> Owner of playlist <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> <Link href="#" onClick={preventDefault} color="inherit"> {notification.playlist} </Link> </Typography> deleted your pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2">  <Link href="#" onClick={preventDefault} color="inherit"> {notification.pod} </Link> </Typography> <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography>. </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
            {notification.type === 'Response Deleted' && 
            <>
              <ListItem>
                <ListItemAvatar>
                  <UserAvatar size="large"/>
                </ListItemAvatar>
                <ListItemText primary={`${notification.title}`} secondary={
                  <Typography variant="body2" style={{display: 'inline-block', color:'#787878'}}> Owner of pod <Typography style={{display: 'inline-block', color:'#787878', fontWeight: 'bold'}} variant="body2"> <Link href="#" onClick={preventDefault} color="inherit"> {notification.pod} </Link> </Typography> deleted your response <Typography style={{display: 'inline-block', color: theme.palette.primary.main }} variant="body2"> {notification.date} </Typography>. </Typography>}/>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
            }
          </div>
        ))}
        <ListItemText style={{paddingTop: '5px'}}>
          <Typography className={classes.notification} color="primary" variant="h6"> load more notification </Typography>
        </ListItemText>
      </List>
    </div>
  );
}
