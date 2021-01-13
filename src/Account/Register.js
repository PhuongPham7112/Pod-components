import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { GoogleLogin } from 'react-google-login';
import Avatar from "@material-ui/core/Avatar";
import DatePicker from 'react-date-picker';
import { withStyles } from '@material-ui/core/styles';
import './DatePickerCustom.css';
import GoogleLogo from '../static/32px-Google_Logo.svg';
import Popover from '@material-ui/core/Popover';


const responseGoogle = (response) => {
  console.log(response);
};

const StyledButton = withStyles({
    root: {
      textTransform: 'none',
      color: 'white'
    },
})(Button);

export default function Register() {
    // for the calendar tracking
    const [value, onChange] = useState(new Date());
    // use state for the position of the popover
    const [isError, setError] = React.useState(null);
    // use state for the position of the popover
    const [anchorEl, setAnchorEl] = React.useState(null);

    // a function that tests email
    const validateEmailandPassword = ()  => {
        var password = document.getElementById("password").value;
        var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
    
        var mail = document.getElementById("email").value;
        var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if (regexMail.test(mail) && regexPassword.test(password)) {
            setError(false);
            return true
        } else {
            setError(true);
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
        validateEmailandPassword();
        handleClick(event);
    };

    return(
        <Box flexDirection="column" justifyContent="center" style={{padding:'5px'}}>
            <TextField required id="email" label="email" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <TextField required id="username" label="username" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <TextField required id="password" label="password" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <TextField required id="confirm-password" label="confirm password" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <DatePicker
                onChange={onChange}
                showLeadingZeros={false}
                value={value}
                format="d/M/y"
                dayPlaceholder="day"
                monthPlaceholder="month"
                yearPlaceholder="year"
            />    
            <StyledButton variant="contained" color="primary" onClick={buttonOnClick} style={{width: '70%', margin: '10px'}}>
                Continue
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
                Invalid email or password
            </Popover>
            <GoogleLogin
                clientId="62863344706-mnoijl0kao0bif165up4hhodd5br2ekh.apps.googleusercontent.com"
                render={renderProps => (
                <StyledButton variant="contained" color="primary" style={{width: '70%', margin: '10px'}} startIcon={<Avatar src={GoogleLogo}/>} onClick={renderProps.onClick} disabled={renderProps.disabled}> 
                    Continue with Google
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