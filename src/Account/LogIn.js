import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import { GoogleLogin } from 'react-google-login';
import Avatar from "@material-ui/core/Avatar";
import GoogleLogo from '../static/32px-Google_Logo.svg';
import Popover from '@material-ui/core/Popover';
import { Typography } from "@material-ui/core";


const responseGoogle = (response) => {
  console.log(response);
};

const StyledButton = withStyles({
    root: {
      textTransform: 'none',
      color: 'white'
    },
})(Button)

export default function LogIn() {
    // validate email and keep track whether user has errors
    const [isError, setError] = React.useState(null);
    // use state for the position of the popover
    const [anchorEl, setAnchorEl] = React.useState(null);

    // a function that tests email
    const validateEmail = ()  => {
        var mail = document.getElementById("email").value;
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(mail)) {
            setError(false)
            return true
        } else {
            setError(true)
            return false
        }
    };

    // determine whether there will be a popover error message appear
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setError(false)
    };

    // a callback function that combines both validation and popover functions
    const buttonOnClick = (event) => {
        validateEmail();
        handleClick(event);
    };

    return(
        <Box flexDirection="column" style={{padding:'5px'}}>
            <TextField required id="email" label="email" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <TextField required id="password" label="password" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <StyledButton variant="contained" color="primary" onClick={buttonOnClick} style={{width: '70%', margin: '10px'}}>
                Welcome Back
            </StyledButton>
            <Popover 
                    id='error-message'
                    elevation={0}
                    open={isError}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    >
                    Invalid email
                </Popover>
            <Typography variant="body1" color="primary">
                Forgot your password?
            </Typography>
            <GoogleLogin
                clientId="62863344706-mnoijl0kao0bif165up4hhodd5br2ekh.apps.googleusercontent.com"
                render={renderProps => (
                <StyledButton variant="contained" color="primary" style={{width: '70%', margin: '10px'}} startIcon={<Avatar src={GoogleLogo}/>} onClick={renderProps.onClick} disabled={renderProps.disabled}> 
                    Login with Google
                </StyledButton>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Box>
        
    )
}