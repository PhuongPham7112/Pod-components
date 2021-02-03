import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import TagTab from './TagTab.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex', 
        textAlign: 'start', 
        padding: 15,
        alignItems: 'center'
    },
    category: {
        display: 'flex',
        padding: '3px 10px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        border: '2px solid',
        fontWeight: 'bold',
        margin: '0.5vmin',
        marginLeft: 0,
        fontWeight: 400
    }
}));


export default function Tag() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.header}>
                <Typography variant="h3" color="primary">
                    Tag
                </Typography>
                <div style={{width: 30}}/>
                <Typography className={classes.category} variant="h6" color="primary">
                    Stuff
                </Typography>

            </div>
            <TagTab/>
        </div>

    )
}