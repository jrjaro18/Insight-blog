import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Tiles.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
const Tiles = (props) => {
    const { data } = props;
    console.log(data)
    const [imageData, setImageData] = React.useState();

    useEffect(() => {
        axios.get('https://insight-blog.onrender.com/tile-image/:' + data._id).then((response) => {
            //console.log("https://insight-blog.onrender.com" + response.data)
            setImageData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    },)

    return (
        <React.Fragment>
            {data ? (
                <Link to={"/blog/:" + data._id} className="tilecontainer" style={{ textDecoration: "unset" }}>
                    <div className="tileimage">
                        <img src={"https://insight-blog.onrender.com" + imageData} alt="tileimage" />
                    </div>
                    <div className='tiletext'>
                        <div className='tiletitle'>
                            {data.title}
                        </div>
                        <div className='tileauthor'>
                            {data.authorname}
                        </div>
                        <div className='tilebody'>
                            <p>{data.blogPreview + "..."}</p>
                        </div>
                        <div className="tilelikes" style={{ display: "flex", alignItems: "center", color: "black" }}>
                            <FavoriteBorderIcon />
                            <div className="tilelikescount" style={{ marginLeft: "0.5rem" }}>
                                {data.likes}
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (<h1>No results found</h1>)}
        </React.Fragment>
    )
}

export default Tiles