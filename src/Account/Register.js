import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { GoogleLogin } from 'react-google-login';
import MUIPicker2 from './MUIPicker2.js'
import { withStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import GoogleSVG from './GoogleSVG.svg';
import FormHelperText from '@material-ui/core/FormHelperText';


const responseGoogle = (response) => {
  console.log(response);
};

const StyledButton = withStyles({
    root: {
      textTransform: 'none',
      color: 'white'
    },
})(Button);

const StyledGoogleButton = withStyles({
    root: {
      textTransform: 'none',
    },
})(Button)


export default function Register() {
    const theme = useTheme();
    const [wordCount, setWordCount] = useState(0)
    // use state for the position of the popover
    const [isError, setError] = useState(null);

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

    // a callback function that combines both validation and popover functions
    const buttonOnClick = (event) => {
        validateEmailandPassword();
    };

    const countCharacter = (event) => {
        if ( event.target.value.length <= 50){
            setWordCount(event.target.value.length)
        }
    }

    return(
        <Box flexDirection="column" justifyContent="center" alignItems="center" style={{display: 'flex', padding:'5px'}}>
            <TextField required id="email" label="email" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <TextField required id="username" label="username" variant="outlined" inputProps={{ maxLength: 50 }} onChange={countCharacter} style={{width: '70%', margin: '10px 10px 0px 10px', backgroundColor: 'white'}}/>
            <FormHelperText style={{width: '70%', margin: '3px 10px 10px 10px'}}> {wordCount}/50 </FormHelperText>
            <TextField required id="password" label="password" variant="outlined" style={{width: '70%', margin: '10px 10px 0px 10px', backgroundColor: 'white'}}/>
            <FormHelperText style={{width: '70%', margin: '3px 10px 10px 10px'}}> Your password must have at least 6 characters with a number and a capital letter </FormHelperText>
            <TextField required id="confirm-password" label="confirm password" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <MUIPicker2/>
            <FormHelperText style={{width: '70%', margin: '0px 10px 10px 10px'}}> You must be 16 or above to use Pod </FormHelperText>
            {isError && <FormHelperText style={{color: "red"}}> Invalid password or email </FormHelperText>}
            <StyledButton variant="contained" color="primary" onClick={buttonOnClick} style={{width: '70%', margin: '10px'}}>
                Continue
            </StyledButton>
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