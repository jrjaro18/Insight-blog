import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import parse from 'html-react-parser'
import "./CSS/BlogPage.css"
import Navbar from "../containers/Navbar"
import Comments from "../containers/Comments"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import axios from 'axios';
const BlogPage = () => {
    const id = window.location.pathname.split("/")[2].replace(":", "")
    const [data, setData] = useState()
    const [htmlDoc, setHtmlDoc] = useState()
    const [imageData, setImageData] = useState()
    const [comment, setComment] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/blog/' + id).then((response) => {
            if (response !== null) {
                setData(response.data)
                
            }
            console.log(response.data)

        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        data? (
        <div>
            <Navbar />
            <br />
            <div className="blogpage">
                <div className="blogpageheading">
                    <div className="blogpageheadingleft">
                        <div className="blogpageimage">
                            <img src={"http://localhost:5000/uploads/" + id + ".jpg"} alt="Blog" />
                        </div>
                    </div>
                    <div className="blogpageheadingright">
                        <div className="blogpagetitle">
                            {data.title}
                        </div>
                        <div className='blogpageauthor'>
                            {data.authorname}
                        </div>
                        <div className='blogpagedate'>
                            Published on {dayjs(data.date).format('dddd, MMMM D, YYYY')}
                        </div>
                    </div>
                </div>
                <div className='blogpagecontent'>
                    {
                    parse(data.content)
                    }
                </div>

                <div className="blogpagelike">
                    <div className="blogpagecommentbutton">
                        Comments:
                    </div>
                    <div className="blogpagelikecontainer" color='white'>
                        <div className="blogpagelikebutton" color='white'>
                            <FavoriteBorderIcon />
                        </div>
                        <div className="blogpagelikenumber">
                            {data.likes}
                        </div>
                    </div>
                </div>
                <div className="blogpagecomment">
                    <form className="blogpagecommentform">
                        <div className="blogpagecommentinput">
                            <TextField id="outlined-multiline-flexible" label="" multiline maxRows={4} style={{ width: "90vw", marginBottom: "2vh" }} />
                        </div>
                        <div className="blogpagecommentbutton">
                            <Button variant="contained" color="primary" style={{ width: "15vmax", height: "6vh", fontSize: "auto", }}>
                                Comment
                            </Button>
                        </div>
                    </form>
                    <Comments />
                    <Comments />
                    <Comments />
                </div>
            </div>
        </div>
        ):(
            <div>loading</div>
        )
    )
}
export default BlogPage