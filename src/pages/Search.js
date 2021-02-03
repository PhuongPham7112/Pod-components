import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FaceIcon from '@material-ui/icons/Face';
import { Typography } from "@material-ui/core";
import SimpleDialogMenu from './Dialog.js';
import DeleteDialog from './DeleteDialog';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        alignItems: 'center',
        width: '400px',
        margin: 'auto',
        border: 'solid #9E9E9E thin',
        borderRadius: '10px',
    },
    chipContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        border: 'solid #9E9E9E thin',
        borderRadius: '10px',
        width: '20%',
    },
    playCircle: {
        fontSize: '35px'
    },
    title: {
        alignSelf: 'flex-start'
    }, 
    chip: {
        margin: '5px'
    },
    loadMore: {
        cursor: 'pointer'
    }
}));

export default function Search() {
    const classes = useStyles();
    const [pods, setPodList] = useState(['Game of the year', 'Fashion trends', 'Pastel or neon?!', 'ASMR is the new trend', 'Hot tea', 'Hanoi is brrrr'])
    const [users, setUserList] = useState(['Nino', 'Masha', 'Alice', 'Chaeyoung', 'Minnie', 'Lily', 'Soye', 'Beans'])
    const [tags, setTags] = useState(['#avoryiscool', '#imPeach&Orange', '#babblebrook', '#trippyshot', '#gameoftheyear', '#our[insert-an-idol-name]', '#anotherBTStrend'])

    function handleRemoveTag(tag) {
        const newList = tags.filter((item) => item !== tag)
        setTags(newList)
    };
    return (
        <div>
        <div className={classes.container}>
            <Typography className={classes.title} variant="h6" color="primary">
                Pods
            </Typography>
            <List style={{width: '100%'}} component="nav" aria-label="main mailbox folders" dense="true" alignItems="flex-start">
                {pods.map((pod) => (
                <ListItem>
                    <ListItemIcon>
                        <PlayCircleOutlineIcon className={classes.playCircle} color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary={pod} secondary="Playlist"/>
                </ListItem>
                ))}
                <ListItemText className={classes.loadMore} disableTypography primary={<SimpleDialogMenu title="Pods" message="see all"/>}/>
            </List>
        </div>

        <div style={{height: '10vh'}}/>

        <div className={classes.container}>
            <Typography className={classes.title} variant="h6" color="primary" >
                Playlists
            </Typography>
            <List style={{width: '100%'}} component="nav" aria-label="main mailbox folders" dense="true" >
                {pods.map((pod) => (
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineIcon className={classes.playCircle} color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary={pod} />
                    </ListItem>
                ))}
                <ListItemText className={classes.loadMore} disableTypography primary={<SimpleDialogMenu title="Playlists" message="see all"/>}/>
            </List>
        </div>

        <div style={{height: '10vh'}}/>

        <div className={classes.container}>
            <Typography className={classes.title} variant="h6" color="primary">
                Following Playlists
            </Typography>
            <List style={{width: '100%'}} component="nav" aria-label="main mailbox folders" dense="true">
                {pods.map((pod) => (
                    <ListItem>
                        <ListItemIcon>
                            <PlayCircleOutlineIcon className={classes.playCircle} color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary={pod} />
                    </ListItem>
                ))}
                <ListItemText  className={classes.loadMore} disableTypography primary={<SimpleDialogMenu title="Following playlists" message="see all"/>}/>
            </List>
        </div>

        <div style={{height: '10vh'}}/>

        <div className={classes.container}>
            <Typography className={classes.title} variant="h6" color="primary">
                Following Users
            </Typography>
            <List style={{width: '100%'}} component="nav" aria-label="main mailbox folders" dense="true">
                {users.map((user) => (
                    <ListItem>
                        <ListItemIcon>
                            <FaceIcon className={classes.playCircle} color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary={user} secondary="bio"/>
                    </ListItem>
                ))}
                <ListItemText  className={classes.loadMore} disableTypography primary={<SimpleDialogMenu title="Following Users" message="see all"/>}/>
            </List>
        </div>

        <div style={{height: '10vh'}}/>

        <div className={classes.chipContainer}>
            <Typography className={classes.title} variant="h6">
                Following tags
            </Typography>
            <div style={{margin: '15px'}}>
                {tags.map((tag) => 
                    <Chip className={classes.chip} label={tag} variant="outlined" color="primary" onDelete={() => handleRemoveTag(tag)}/>
                )}
            </div> 
            <SimpleDialogMenu title="Following Tags" message="see all"/>
        </div>

        <div style={{height: '10vh'}}/>

    </div>
);
}

