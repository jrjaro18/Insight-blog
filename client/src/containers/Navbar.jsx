import React, { useState } from 'react'
import "./CSS/Navbar.css"
import Modal from 'react-modal'
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Navbar = () => {

    let subtitle;
    const [viewModal, setViewModal] = useState(false);
    const handleNameClick = () => {
        setViewModal(prevState => !prevState);
        setIsOpen(true);
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            width:'auto',
            left:'90%',
            marginTop:'7%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display:'flex',
            flexDirection: 'column',

        },
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

    const handleYourBlogs =()=>{
        window.location.href = '/author-page'
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
                        {modalIsOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <Modal isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal">
                                        {localStorage.getItem('email') === null ? <Button onClick={handleLogin}>
                                            Login
                                        </Button> : <Button onClick={handleLogout}>
                                            Logout
                                        </Button>
                                        }
                                        <Button onClick={handleWrite}>
                                            Write
                                        </Button>
                                        <Button onClick={handleYourBlogs}>
                                            Your Blogs
                                        </Button>
                                    </Modal>
                                </div>
                            </div>
                        )}
                    </li>
                    <li >
                        <div className='others' onClick={handleNameClick}><MoreVertIcon />
                            {/*  */}
                        </div>

                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar