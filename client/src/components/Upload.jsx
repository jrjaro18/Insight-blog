import React from 'react'
import { useState} from 'react';
import {toast, ToastContainer} from 'react-toastify'
import axios from 'axios';
import Navbar from '../containers/Navbar'
import ReactQuill from 'react-quill';
import { useDropzone } from 'react-dropzone';
import 'react-quill/dist/quill.snow.css';
import Button from '@mui/material/Button';
import './CSS/Upload.css'

const Upload = () => {
    const [title, setTitle] = useState();
    const [value, setValue] = useState();
    const [tags, setTags] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const[temp, setTemp] = useState(null);
    
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setTemp(file)
        setSelectedImage(URL.createObjectURL(file));
        console.log(temp);
    };

    
    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', });

    const dropzoneStyle = {
        width: '62vw',
        height: '40vmax',
        border: '2px dashed #ccc',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5vmax 0vmax',
        margin: '2vh auto',
        textAlign: 'center',
        cursor: 'pointer',
        fontFamily: "Arial",
    };

    const handleClick = (e) => {
        e.preventDefault();
        const tagarray = tags.split(',');

        const data = new FormData();
        data.append('title', title);
        data.append('content', value);
        data.append('tags', tagarray);
        data.append('thumbnail', temp);
        data.append('authorid', localStorage.getItem('id'));
        data.append('authorname', localStorage.getItem('name'));

        console.log(data);
        if(title === undefined || value === undefined || tags === undefined || temp === null){
            toast.error('Please fill all the fields', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        if(title.length < 10 || title.length > 100){
            toast.error('Title should be between 10 and 100 characters long!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        if(value.length < 1200){
            toast.warn('Content should be atleast 1200 characters long!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        if(tagarray.length < 2){
            toast.error('Please enter atleast 2 tags!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        if(temp.type!=="image/jpeg"){
            toast.error('Please upload a jpeg image!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        axios.post('http://localhost:5000/upload', data).then((res) => {
            console.log(res);
            window.location.href = '/'
        }).catch((err) => {
            console.log(err);
        })
    }    

    return (
        localStorage.getItem('email') === null ? window.location.href = '/' :
        <div className="uploadpagecontainer">
            {/* {selectedImage} */}
            <Navbar />
            <form>
                <div className="uploadpagetitle">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>

                <div className="uploadpagecontent" style={{ height: "80vh" }}>
                    <label htmlFor="content">Content</label>
                    <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: "70vh", width: "95vw" }} />
                </div>
                <div className="uploadpagethumbnail">
                    <label htmlFor="thumbnail" style={{ marginTop: "3vh" }}>Thumbnail</label>
                    <div {...getRootProps()} style={dropzoneStyle}>
                        <input accept="image/*" {...getInputProps()} />
                        {(
                            <p>Drop the Thumbnail here...<br />It is advised to upload a square image!</p>
                        )}
                        {selectedImage && (
                            <div>
                                <img src={selectedImage} alt="Selected" style={{ maxWidth:"60vw", maxHeight: "35vw", }} />
                            </div>
                        )}
                    </div>
                    <div className="uploadpagetags">
                        <label htmlFor="tags">Tags</label>
                        <input type="text" id="tags" onChange={(e)=>{setTags(e.target.value)}} placeholder='For better ranking enter tags separated by commas 😉' />
                    </div>
                    <Button variant="contained" color="primary" style={{ width: "15vmax", height: "5vmax", fontSize: "auto", marginTop: "2vh", marginLeft: "3vw" }} onClick={handleClick}>
                        Publish
                    </Button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Upload