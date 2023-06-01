import React from 'react'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './CSS/SignIn.css'
function SignIn() {
    var [email, setemail] = useState('')
    var [password, setpassword] = useState('')

    var inputStyle = {
        "marginBottom": "1rem",
        "borderRadius": "1rem",
        "width": "90%",
    }
    useEffect(() => {
        console.log(email)
    }, [email]);
    useEffect(() => {
        console.log(password)
    }, [password]);
    return (
        <div className='signinPage'>
            <center> <h1 style={{fontFamily:"'Times New Roman', Tahoma, Geneva, Verdana, sans-serif", fontSize:"5vw",marginTop:"0"}}>I N S I G H T</h1> </center>
            <div className='SignInContainer'>
                <div className='SignInHeader'>
                    Sign In
                </div>
                <div className='SignInInfo'>
                    <form>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={inputStyle} onChange={(e)=>{setemail(e.target.value)}}/>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={inputStyle} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <Button variant="outlined">Sign In</Button>
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