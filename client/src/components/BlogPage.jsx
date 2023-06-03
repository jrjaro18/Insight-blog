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
    const [comment, setComment] = useState()
    const [recComment, setRecComment] = useState()

    const handleLikeClick = () => {
        if (localStorage.getItem('email') === null) {
            alert("Login to like the blog")
        } else {
            axios.post('http://localhost:5000/blog/like/:' + data._id + "+" + localStorage.getItem("id")).then((response) => {
                console.log(response.data)
                if (response.data.liked) {
                    document.getElementsByClassName("blogpagelikebutton")[0].style.color = "red"
                    document.getElementsByClassName("blogpagelikenumber")[0].innerHTML = response.data.likes
                } else {
                    document.getElementsByClassName("blogpagelikebutton")[0].style.color = "black"
                    document.getElementsByClassName("blogpagelikenumber")[0].innerHTML = response.data.likes
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const handleSubmit = () => {
        if (localStorage.getItem('email') === null) {
            alert("Login to comment on the blog")
        } else {
            axios.post('http://localhost:5000/blog/comment/:' + data._id + "+" + localStorage.getItem("id"), { comment: comment, name: localStorage.getItem('name') }).then((response) => {
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    //for the blog
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

    //for the comments
    useEffect(() => {
        axios.get('http://localhost:5000/blog/get-comments/:' + id).then((response) => {
            if (response !== null) {
                setRecComment(response.data)
            }
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        data ? (
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
                            <div className="blogpagelikebutton" color='white' onClick={handleLikeClick} style={{ cursor: "pointer" }}>
                                <FavoriteBorderIcon />
                            </div>
                            <div className="blogpagelikenumber">
                                {data.likes}
                            </div>
                        </div>
                    </div>

                    <div className="blogpagecomment" >
                        {(localStorage.getItem('email') !== null) ? (
                            <form className="blogpagecommentform">
                                <div className="blogpagecommentinput">
                                    <TextField id="outlined-multiline-flexible" label="" multiline maxRows={4} style={{ width: "90vw", marginBottom: "2vh" }} onChange={(e) => { setComment(e.target.value) }} />
                                </div>
                                <div className="blogpagecommentbutton">
                                    <Button variant="contained" color="primary" style={{ width: "15vmax", height: "6vh", fontSize: "auto", }} onClick={handleSubmit}>
                                        Comment
                                    </Button>
                                </div>
                            </form>
                        ) : (<center>To Comment Login!</center>)}
                        {
                            recComment?(recComment.map((comment,i) => {
                                return (
                                    <Comments key={i} comment={comment} />
                                )
                            })):(<center>Loading</center>)
                        }
                    </div>
                </div>
            </div>
        ) : (
            <div>
                LOADING PAGE ...
            </div>
        )
    )
}
export default BlogPage