import React from 'react'
import {toast, ToastContainer} from 'react-toastify'
import { useState } from 'react'
import axios from 'axios'
import "./CSS/Register.css"
import 'react-toastify/dist/ReactToastify.css'
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
            return toast.error('Please fill all the fields', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        if(password !== confirmPassword){
            return toast.error('Passwords do not match!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        if(password.length < 6){
            return toast.warn('Passwords must be 6 characters long!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        const editeddob = dayjs(dob).format('YYYY-MM-DD');
        const today = dayjs().format('YYYY-MM-DD');
        if(editeddob > today){
            return toast.error('Data of Birth in future!?', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
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
                    return toast.error('User already exists!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
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
            <h1 style={{ fontFamily: "'Arial'", fontSize: "5vmax", backgroundPosition: "fixed", cursor: "none", textAlign: "center", marginTop: "0" , marginBottom:"0", padding:"0", color:"rgb(184, 179, 171)"}}>I N S I G H T</h1>
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
            <ToastContainer position="bottom-right" newestOnTop />
        </div>
    )
}

export default Register