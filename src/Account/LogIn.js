import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { GoogleLogin } from 'react-google-login';
import Avatar from "@material-ui/core/Avatar";
import GoogleLogo from '../static/32px-Google_Logo.svg';

const responseGoogle = (response) => {
  console.log(response);
};

const validateEmail = ()  => {
    var mail = document.getElementById("email").value;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(mail)) {
        alert("valid email");
        return true
    } else {
        alert("invalid email");
        return false
    }
};

export default function LogIn() {
    return(
        <Box flexDirection="column" style={{padding:'5px'}}>
            <TextField required id="email" label="email" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <TextField required id="password" label="password" variant="outlined" style={{width: '70%', margin: '10px', backgroundColor: 'white'}}/>
            <Button variant="contained" color="primary" onClick={validateEmail} style={{width: '70%', margin: '10px'}}>
                Welcome Back
            </Button>
            <p>
                Forgot your password?
            </p>
            <GoogleLogin
                clientId="62863344706-mnoijl0kao0bif165up4hhodd5br2ekh.apps.googleusercontent.com"
                render={renderProps => (
                <Button variant="contained" color="primary" style={{width: '70%', margin: '10px'}} startIcon={<Avatar src={GoogleLogo}/>} onClick={renderProps.onClick} disabled={renderProps.disabled}> 
                    Login with Google
                </Button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Box>
        
    )
}