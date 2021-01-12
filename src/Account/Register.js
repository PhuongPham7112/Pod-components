import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { GoogleLogin } from 'react-google-login';
import Avatar from "@material-ui/core/Avatar";
import DatePicker from 'react-date-picker';
import './DatePickerCustom.css';
import GoogleLogo from '../static/32px-Google_Logo.svg';

const responseGoogle = (response) => {
  console.log(response);
};

const validateEmailandPassword = ()  => {
    var password = document.getElementById("password").value;
    var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/

    var mail = document.getElementById("email").value;
    var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexMail.test(mail) && regexPassword.test(password)) {
        alert("valid email and password");
        return true
    } else if (!regexMail.test(mail) && regexPassword.test(password)) {
        alert("invalid email");
        return false
    } else if (regexMail.test(mail) && !regexPassword.test(password)) {
        alert("invalid password");
        return false
    } else if (!regexMail.test(mail) || !regexPassword.test(password)) {
        alert("invalid email and password");
        return false
    }
};

export default function LogIn() {
    const [value, onChange] = useState(new Date());

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
            <Button variant="contained" color="primary" onClick={validateEmailandPassword} style={{width: '70%', margin: '10px'}}>
                Continue
            </Button>
            <GoogleLogin
                clientId="62863344706-mnoijl0kao0bif165up4hhodd5br2ekh.apps.googleusercontent.com"
                render={renderProps => (
                <Button variant="contained" color="primary" style={{width: '70%', margin: '10px'}} startIcon={<Avatar src={GoogleLogo}/>} onClick={renderProps.onClick} disabled={renderProps.disabled}> 
                    Continue with Google
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