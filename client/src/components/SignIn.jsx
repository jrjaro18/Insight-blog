import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './CSS/SignIn.css'
function SignIn() {
    var [email, setemail] = useState('')
    var [password, setpassword] = useState('')

    var inputStyle = {
        "marginBottom": "2vmin",
        "borderRadius": "1rem",
        "width": "99%",
        "height": "7vmax",
    }

    const handleClick = () => {
        axios.post('http://localhost:5000/login', {
            email: email,
            password: password
        })
            .then((res) => {
                if (res.data === "User does not exist") {
                    alert("User does not exist");
                }
                else if (res.data === "Incorrect password") {
                    alert("Incorrect password");
                }
                else {
                    alert("Logged in successfully");
                    localStorage.setItem('email', res.data.email);
                    localStorage.setItem('name', res.data.name);
                    localStorage.setItem('id', res.data.id);
                    window.location.href = '/home';
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        localStorage.getItem('email') !== null? window.location.href = '/home':
        <div className='signinPage'>
            <center> <h1 style={{ fontFamily: "'Times New Roman', Tahoma, Geneva, Verdana, sans-serif", fontSize: "5vmax", marginTop: "0" }}>I N S I G H T</h1> </center>
            <div className='SignInContainer'>
                <div className='SignInHeader'>
                    Sign In
                </div>
                <div className='SignInInfo'>
                    <form>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={inputStyle} onChange={(e) => { setemail(e.target.value) }} />
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={inputStyle} onChange={(e) => { setpassword(e.target.value) }} />
                        <Button variant="outlined" onClick={handleClick}>Sign In</Button>
                    </form>
                </div>
                <div className='SignInFooterText'>
                    Don't have an account? <a href='/register'>Register</a>
                </div>

            </div>
        </div>
    )
}

export default SignIn