import React from 'react'
import "./CSS/BlogPage.css"
import Navbar from "../containers/Navbar"
import Comments from "../containers/Comments"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
const BlogPage = () => {
    return (
        <div>
            <Navbar />
            <br />
            <div className="blogpage">
                <div className="blogpageheading">
                    <div className="blogpageheadingleft">
                        <div className="blogpageimage">
                            <img src="https://www.pragimtech.com/wp-content/uploads/2021/03/ReactJS.jpg" alt="Blog" />
                        </div>
                    </div>
                    <div className="blogpageheadingright">
                        <div className="blogpagetitle">
                            Title of the Blog will come here in this Section
                        </div>
                        <div className='blogpageauthor'>
                            Author Name Here
                        </div>
                        <div className='blogpagedate'>
                            Published on 12th January, 2021
                        </div>
                    </div>
                </div>
                <div className='blogpagecontent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim ac leo tincidunt elementum sed at lectus. Phasellus interdum facilisis mi, id scelerisque ligula facilisis ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel lacinia ex. In malesuada mauris sit amet nulla efficitur, a efficitur nulla convallis. Maecenas congue, arcu eu posuere pellentesque, lorem lorem auctor purus, in maximus nunc libero eu elit. In tincidunt mauris vel lacinia varius. Nulla et neque id tortor mattis pulvinar. Aliquam sed mauris a nulla condimentum malesuada. Sed iaculis diam in metus eleifend, a auctor libero sollicitudin. Curabitur in sapien eleifend, elementum sem sed, euismod nisl. Sed laoreet metus id ante mattis, id sollicitudin sapien condimentum. Etiam fringilla consequat nunc. Sed dignissim tortor sit amet ex rhoncus, a feugiat urna fermentum. Vivamus mollis, ipsum ut luctus eleifend, orci nulla efficitur lectus, ac pulvinar tortor est ac nunc.</p>

                    <p>Quisque ultrices metus eu mauris tincidunt, ac congue turpis euismod. Phasellus mattis iaculis mattis. Sed id libero nec neque finibus eleifend id ac nulla. Sed at faucibus nulla, eget sollicitudin lorem. Duis dapibus lacus at lectus hendrerit, ut fermentum est volutpat. Aenean eleifend dapibus libero, nec finibus felis ullamcorper at. Maecenas a interdum tortor, vel euismod sem. Fusce ac condimentum risus. Nullam rhoncus felis a tincidunt euismod. Donec sagittis ex ut erat dictum congue. Cras ut tincidunt est. Sed gravida nisl in quam tristique, ut gravida mi commodo. In pellentesque ultricies metus, eu dictum massa aliquam non.</p>

                    <p>Vestibulum et felis sagittis, dapibus velit sed, scelerisque dui. Sed vel arcu sit amet justo feugiat blandit. Morbi sem mauris, volutpat eget dignissim eget, maximus nec lectus. Sed at ullamcorper nulla, nec rutrum leo. Integer semper sem non neque pharetra, ut tincidunt justo ultrices. Morbi at eros nec orci egestas bibendum. Aenean dignissim ante vitae magna placerat, non tristique nunc vulputate. Mauris nec sem ut mauris lobortis eleifend. Praesent dapibus pellentesque ex, id vulputate nisl finibus in. Nullam non dui eget tellus consequat ultrices non ut nunc. Integer ultrices libero a felis iaculis, eu auctor mi vulputate. Curabitur vulputate neque nec magna ultricies feugiat. Nullam faucibus, ligula id posuere posuere, metus tortor maximus diam, a consequat lectus enim in enim. Vestibulum feugiat justo sed purus cursus, vel interdum neque commodo. Fusce vitae mi dui.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim ac leo tincidunt elementum sed at lectus. Phasellus interdum facilisis mi, id scelerisque ligula facilisis ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel lacinia ex. In malesuada mauris sit amet nulla efficitur, a efficitur nulla convallis. Maecenas congue, arcu eu posuere pellentesque, lorem lorem auctor purus, in maximus nunc libero eu elit. In tincidunt mauris vel lacinia varius. Nulla et neque id tortor mattis pulvinar. Aliquam sed mauris a nulla condimentum malesuada. Sed iaculis diam in metus eleifend, a auctor libero sollicitudin. Curabitur in sapien eleifend, elementum sem sed, euismod nisl. Sed laoreet metus id ante mattis, id sollicitudin sapien condimentum. Etiam fringilla consequat nunc. Sed dignissim tortor sit amet ex rhoncus, a feugiat urna fermentum. Vivamus mollis, ipsum ut luctus eleifend, orci nulla efficitur lectus, ac pulvinar tortor est ac nunc.</p>

                    <p>Quisque ultrices metus eu mauris tincidunt, ac congue turpis euismod. Phasellus mattis iaculis mattis. Sed id libero nec neque finibus eleifend id ac nulla. Sed at faucibus nulla, eget sollicitudin lorem. Duis dapibus lacus at lectus hendrerit, ut fermentum est volutpat. Aenean eleifend dapibus libero, nec finibus felis ullamcorper at. Maecenas a interdum tortor, vel euismod sem. Fusce ac condimentum risus. Nullam rhoncus felis a tincidunt euismod. Donec sagittis ex ut erat dictum congue. Cras ut tincidunt est. Sed gravida nisl in quam tristique, ut gravida mi commodo. In pellentesque ultricies metus, eu dictum massa aliquam non.</p>

                    <p>Vestibulum et felis sagittis, dapibus velit sed, scelerisque dui. Sed vel arcu sit amet justo feugiat blandit. Morbi sem mauris, volutpat eget dignissim eget, maximus nec lectus. Sed at ullamcorper nulla, nec rutrum leo. Integer semper sem non neque pharetra, ut tincidunt justo ultrices. Morbi at eros nec orci egestas bibendum. Aenean dignissim ante vitae magna placerat, non tristique nunc vulputate. Mauris nec sem ut mauris lobortis eleifend. Praesent dapibus pellentesque ex, id vulputate nisl finibus in. Nullam non dui eget tellus consequat ultrices non ut nunc. Integer ultrices libero a felis iaculis, eu auctor mi vulputate. Curabitur vulputate neque nec magna ultricies feugiat. Nullam faucibus, ligula id posuere posuere, metus tortor maximus diam, a consequat lectus enim in enim. Vestibulum feugiat justo sed purus cursus, vel interdum neque commodo. Fusce vitae mi dui.</p>
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
                            100
                        </div>
                    </div>
                </div>
                <div className="blogpagecomment">
                    <form className="blogpagecommentform">
                        <div className="blogpagecommentinput">
                            <TextField id="outlined-multiline-flexible" label="" multiline maxRows={4} style={{ width: "90vw", marginBottom: "2vh" }} />
                        </div>
                        <div className="blogpagecommentbutton">
                            <Button variant="contained" color="primary" style={{ width: "15vmax", height: "6vh", fontSize:"auto", }}>
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
    )
}

export default BlogPage