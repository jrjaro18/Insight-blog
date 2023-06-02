import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../containers/Navbar'
import ReactQuill from 'react-quill';
import { useDropzone } from 'react-dropzone';
import 'react-quill/dist/quill.snow.css';
import Button from '@mui/material/Button';
import './CSS/Upload.css'

const Upload = () => {
    const [value, setValue] = useState();
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', });

    const dropzoneStyle = {
        width: '92vw',
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
        fontFamily: "Arial"
    };

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <div className="uploadpagecontainer">

            <Navbar />
            <form>
                <div className="uploadpagetitle">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
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
                                <img src={selectedImage} alt="Selected" style={{ height: "35vw", }} />
                            </div>
                        )}
                    </div>
                    <div className="uploadpagetags">
                        <label htmlFor="tags">Tags</label>
                        <input type="text" id="tags" placeholder='For better ranking enter tags separated by commas 😉'/>
                    </div>
                    <Button variant="contained" color="primary" style={{ width: "15vmax", height: "5vmax", fontSize: "auto", marginTop: "2vh", marginLeft: "3vw" }} onClick={() => { console.log("helolo") }}>
                        Publish
                    </Button>
                </div>


            </form>
        </div>
    )
}

export default Upload