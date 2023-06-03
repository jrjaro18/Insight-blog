import React, { useState } from 'react'
import "./CSS/Navbar.css"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Navbar = () => {
    const [viewModal, setViewModal] = useState(false);
    const handleNameClick = () => {
        setViewModal(prevState => !prevState);
    };
    const handleLogin = () => {
        localStorage.clear();
        window.location.href = '/signin';
    }
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    const handleWrite = () => {
        window.location.href = '/upload';
    }
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <a className="name" href="/">I N S I G H T</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li className='person'>
                        {
                            localStorage.getItem('email') === null ? <a href="/signin">Sign In</a> :
                                <div onClick={handleNameClick}>{localStorage.getItem('name')}</div>
                        }
                        {viewModal && (
                            <div className="modal">
                                <div className="modal-content">
                                    <Card style={{ display: "flex", justifyContent: "space-between" }}>
                                        {localStorage.getItem('email') === null ? <Button onClick={handleLogin}>
                                            Login
                                        </Button> : <Button onClick={handleLogout}>
                                            Logout
                                        </Button>
                                        }
                                        <Button onClick={handleWrite}>
                                            Write
                                        </Button>
                                    </Card>
                                </div>
                            </div>
                        )}
                    </li>
                    <li >
                        <div className='others' onClick={handleNameClick}><MoreVertIcon />
                            {viewModal && (
                                <div className="modal">
                                    <div className="modal-content">
                                        <Card style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#f2eeee", border: "none", boxShadow: "none" }}>
                                            {localStorage.getItem('email') === null ?
                                            <Button onClick={handleLogin} style={{ backgroundColor: "#f2eeee", border: "none", boxShadow: "none" }}>
                                            Login
                                        </Button>:
                                                <Button onClick={handleLogout} style={{ backgroundColor: "#f2eeee", border: "none", boxShadow: "none" }}>
                                                    Logout
                                                </Button>
                                            }
                                            <Button onClick={handleWrite} style={{ backgroundColor: "#f2eeee", border: "none", boxShadow: "none" }}>
                                                Write
                                            </Button>
                                        </Card>
                                    </div>
                                </div>
                            )}
                        </div>

                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar