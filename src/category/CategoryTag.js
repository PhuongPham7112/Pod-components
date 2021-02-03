import Chip from '@material-ui/core/Chip';
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    chipContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        alignItems: 'flex-start',
        width: '80vw',
        margin: 'auto',
        textAlign: 'start'
    },
    chip: {
        margin: '5px'
    },
}))

export default function CategoryTag() {
    const classes = useStyles();
    const [tags, setTags] = useState(['#avoryiscool', '#imPeach&Orange', '#babblebrook', '#trippyshot', '#gameoftheyear', '#our[insert-an-idol-name]', '#anotherBTStrend'])
    function handleRemoveTag(tag) {
        const newList = tags.filter((item) => item !== tag)
        setTags(newList)
    };
    return(
        <div className={classes.chipContainer}>
            <Typography className={classes.title} variant="h6">
                Related tags
            </Typography>
            <div style={{margin: '15px'}}>
                {tags.map((tag) => 
                    <Chip className={classes.chip} label={tag} variant="outlined" color="primary" onDelete={() => handleRemoveTag(tag)}/>
                )}
            </div> 
            <Typography color="secondary">
                load more
            </Typography>
        </div>
    )
}