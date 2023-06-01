import React from 'react'
import "./CSS/Comments.css"
const Comments = () => {
  return (
    <React.Fragment>
        <div className="commentcontainer">
            <div className="commentuser">
                Commenter User Name    
            </div>
            <div className="commenttext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis eleifend neque, at convallis metus iaculis non. Mauris hendrerit, enim nec viverra tristique, nisl dui tincidunt odio, at scelerisque leo neque ut mauris. Vestibulum id ligula volutpat, lacinia metus id, fermentum tellus. Suspendisse quis tempor mauris.
            </div>
        </div>
    </React.Fragment>
  )
}

export default Comments