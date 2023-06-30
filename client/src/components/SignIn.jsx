import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './CSS/SignIn.css'
import 'react-toastify/dist/ReactToastify.css'
function SignIn() {
    var [email, setemail] = useState('')
    var [password, setpassword] = useState('')

    var inputStyle = {
        "marginBottom": "2vh",
        "borderRadius": "1rem",
        "width": "100%",
    }

    const handleClick = () => {
        axios.post('https://insight-blog.onrender.com/login', {
            email: email,
            password: password
        })
            .then((res) => {
                if (res.data === "User does not exist") {
                    toast.error('User Does Not Exist!', {
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
                else if (res.data === "Incorrect password") {
                    toast.error('Incorrect Password!', {
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
                else {
                    toast.success('Logged in!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
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
        localStorage.getItem('email') !== null ? window.location.href = '/home' :
            <div className='signinPage'>
                <center> <h1 style={{ fontFamily: "'Arial'", fontSize: "5vmax", marginTop: "0", color: "rgb(184, 179, 171)" }}>I N S I G H T</h1> </center>
                <div className='SignInContainer'>
                    <div className='SignInHeader'>
                        Sign In
                    </div>
                    <div className='SignInInfo'>
                        <form onSubmit={handleClick}>
                            <TextField id="outlined-basic"  label="Email" variant="outlined" style={inputStyle} onChange={(e) => { setemail(e.target.value) }} />
                            <TextField id="outlined-password-input"  label="Password" type="password" autoComplete="current-password" style={inputStyle} onChange={(e) => { setpassword(e.target.value) }} />
                            <Button variant="outlined" onClick={handleClick}>Sign In</Button>
                        </form>
                    </div>
                    <div className='SignInFooterText'>
                        Don't have an account? <a href='/register'>Register</a>
                    </div>

                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
    )
}

export default SignIn