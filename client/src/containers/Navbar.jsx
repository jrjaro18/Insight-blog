import React from 'react'
import "./CSS/Navbar.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Navbar = () => {
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
                    <li className='login'>
                        <a href="/login">Login</a>
                    </li>
                    <li >
                        <a href="/other" className='others'><MoreVertIcon /></a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar