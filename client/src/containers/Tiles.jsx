import React from 'react'
import './CSS/Tiles.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Tiles = () => {
  return (
    <React.Fragment>
        <div className="tilecontainer">
            <div className="tileimage">
                <img src="https://www.pragimtech.com/wp-content/uploads/2021/03/ReactJS.jpg" alt="tileimage"/>
            </div>
            <div className='tiletext'>
                <div className='tiletitle'>
                    Tile Title comes here!
                </div>
                <div className='tileauthor'>
                    - Author Name
                </div>
                <div className='tilebody'>
                    <p>Preview text Lorem ipsum 40 dolor sit amet, consectetur adipiscing elit. Sed vestibulum quam non mi vehicula tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Quisque interdum eu mauris vitae commodo. Vivamus vitae enim id felis sagittis ullamcorper non nec justo</p>
                </div>
                <div className="tilelikes" style={{display:"flex",alignItems:"center"}}>
                    <FavoriteBorderIcon/>
                    <div className="tilelikescount" style={{marginLeft:"0.5rem"}}>
                        100
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Tiles