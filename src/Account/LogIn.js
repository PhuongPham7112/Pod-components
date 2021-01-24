import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { GoogleLogin } from 'react-google-login';
import { Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import GoogleSVG from './GoogleSVG.svg';
import Link from '@material-ui/core/Link';
import FormHelperText from '@material-ui/core/FormHelperText';

const responseGoogle = (response) => {
  console.log(response);
};

const StyledButton = withStyles({
    root: {
      textTransform: 'none',
      color: 'white'
    },
})(Button)

const StyledGoogleButton = withStyles({
    root: {
      textTransform: 'none',
    },
})(Button)

export default function LogIn() {
    const theme = useTheme();
    // validate email and keep track whether user has errors
    const [isError, setError] = React.useState(null);

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

    // a callback function that combines both validation and popover functions
    const buttonOnClick = (event) => {
        validateEmail();
    };
    // this one is for the link component in the Forgot Password? line
    const preventDefault = (event) => event.preventDefault();

    return(
        <Box flexDirection="column" justifyContent="center" alignItems="center" style={{display: 'flex', padding:'5px'}}>
            <TextField required id="email" label="email" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <TextField required id="password" label="password" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            {isError && <FormHelperText style={{color: "red"}}> Invalid email </FormHelperText>}
            <StyledButton variant="contained" color="primary" onClick={buttonOnClick} style={{width: '70%', margin: '10px'}}>
                Welcome Back
            </StyledButton>
            <Typography variant="body1" color="primary">
                <Link href="#" onClick={preventDefault}>
                    Forgot your password?
                </Link>
            </Typography>
            <Divider style={{width: '50%', height: '1.5px', margin: '10px auto'}} />
            <GoogleLogin
                clientId="62863344706-mnoijl0kao0bif165up4hhodd5br2ekh.apps.googleusercontent.com"
                render={renderProps => (
                <StyledGoogleButton variant="outlined" color="primary" style={{width: '70%', margin: '10px'}} startIcon={<img src={GoogleSVG} style={{width: 25, height: 25}}/>} onClick={renderProps.onClick} disabled={renderProps.disabled}> 
                    Continue with Google
                </StyledGoogleButton>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Box>
        
    )
}