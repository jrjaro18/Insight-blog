import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Tiles.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
const Tiles = (props) => {
    const { data } = props;
    const [imageData, setImageData] = React.useState();

    useEffect(() => {
        if (data._id === undefined) {
            return
        }

        axios.get('http://localhost:5000/tile-image/:' + data._id).then((response) => {
            console.log("http://localhost:5000" + response.data)
            setImageData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    },)

    return (
        <React.Fragment>
            <Link to= {"/blog/:"+data._id} className="tilecontainer" style={{textDecoration:"unset"}}>
                <div className="tileimage">
                    <img src={"http://localhost:5000" + imageData} alt="tileimage" />
                </div>
                <div className='tiletext'>
                    <div className='tiletitle'>
                        {data.title}
                    </div>
                    <div className='tileauthor'>
                        {data.authorname}
                    </div>
                    <div className='tilebody'>
                        <p>{data.blogPreview}</p>
                    </div>
                    <div className="tilelikes" style={{ display: "flex", alignItems: "center",color:"black" }}>
                        <FavoriteBorderIcon />
                        <div className="tilelikescount" style={{ marginLeft: "0.5rem" }}>
                            {data.likes}
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default Tiles