import React from 'react'
import "./CSS/Comments.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Comments = (props) => {
  const { comment } = props
  return (
    <React.Fragment>
        <div className="commentcontainer">
            <div className="commentuser">
                <AccountCircleIcon className="commentusericon"/>
                {comment.commentername}   
            </div>
            <div className="commenttext">
            {comment.comment}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Comments