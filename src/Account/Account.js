import React from "react";
import SimpleTabs from './Tab.js'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        backgroundColor: '#f2f2f2',
        margin: 'auto',
        width: '40%',
    }
}));

export default function Account() {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <SimpleTabs/>
        </div>
    );
}