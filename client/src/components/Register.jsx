import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./CSS/Register.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

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

    const handleSubmit = () => {
        if(name === '' || email === '' || password === '' || confirmPassword === '' || dob === null){
            alert("Please fill all the fields");
        }
        if(password !== confirmPassword){
            alert("Passwords do not match");
        }
        if(password.length < 6){
            alert("Password must be atleast 6 characters long");
        }
        const editeddob = dayjs(dob).format('YYYY-MM-DD');
        const today = dayjs().format('YYYY-MM-DD');
        if(editeddob > today){
            alert("Date of Birth cannot be in the future");
        }
        else{
            const user = {
                name:name,
                email:email,
                password:password,
                dob:editeddob                
            }
            axios.post('http://localhost:5000/register', user).then((res) => {
                if(res.data === "User already exists"){
                    alert("User already exists");
                }
                else{
                    alert("User created successfully");
                    window.location.href = '/signin';
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div className='regPage'>
            <h1 style={{ fontFamily: "'Times New Roman', Tahoma, Geneva, Verdana, sans-serif", fontSize: "5vmax", backgroundPosition: "fixed", cursor: "none", textAlign: "center", marginTop: "0" }}>I N S I G H T</h1>
            <div className='RegisterContainer'>
                <div className='RegisterHeader'>
                    Register Here
                </div>
                <div className='RegisterInfo'>
                    <form>
                        <TextField id="outlined-name-input" label="Name" variant="outlined" style={inputStyle} onChange={(e) => { setName(e.target.value) }} />
                        <TextField id="outlined-email-input" label="Email" variant="outlined" style={inputStyle} onChange={(e) => { setEmail(e.target.value) }} />
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={inputStyle} onChange={(e) => { setPassword(e.target.value) }} />
                        <TextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password" style={inputStyle} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Date of Birth" onChange={(e) => { setDob(e.$d) }} />
                        </LocalizationProvider>
                        <Button variant="outlined" style={{ marginTop: "1rem" }} onClick={handleSubmit}>Create Account</Button>
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