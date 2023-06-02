import React from 'react'
import {useState,useEffect} from 'react'
import "./CSS/Register.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

var inputStyle = {
    "marginBottom": "1rem",
    "borderRadius": "1rem",
    "width": "90%",
}
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState(null);

    useEffect(() => {
        console.log(name)
    }, [name]);
    useEffect(() => {
        console.log(email)
    }, [email]);
    useEffect(() => {
        console.log(password)
    }, [password]);
    useEffect(() => {
        console.log(confirmPassword)
    }, [confirmPassword]);
    useEffect(() => {
        console.log(dob)
    }, [dob]);

    return (
        <div className='regPage'>
            <h1 style={{ fontFamily: "'Times New Roman', Tahoma, Geneva, Verdana, sans-serif", fontSize: "5vmax" ,backgroundPosition:"fixed",cursor:"none",textAlign:"center", marginTop:"0"}}>I N S I G H T</h1>
            <div className='RegisterContainer'>
                <div className='RegisterHeader'>
                    Register Here
                </div>
                <div className='RegisterInfo'>
                    <form>
                        <TextField id="outlined-name-input" label="Name" variant="outlined" style={inputStyle} onChange={(e)=>{setName(e.target.value)}}/>
                        <TextField id="outlined-email-input" label="Email" variant="outlined" style={inputStyle} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={inputStyle} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <TextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password" style={inputStyle} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Date of Birth" onChange={(e)=>{setDob(e.$d)}}/>
                        </LocalizationProvider>
                        <Button variant="outlined" style={{marginTop:"1rem"}}>Create Account</Button>
                    </form> 
                </div>
                <div className='RegisterFooterText'>
                    Already have an account? <a href='/signin'>LogIn</a>
                </div>
            </div>
        </div>
    )
}

export default Register