import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import './CSS/AboutPage.css'
const AboutPage = () => {
  const headingCSS = {
    textDecoration:"unset" ,
    color:"whitesmoke",
    fontSize: "2vw",
  }
  return (
    <React.Fragment>
      <div className="aboutcontainer">
          <div className="aboutheading">
              <ul>
                <li>
                <Link to="/about" style={headingCSS}>I N S I G H T</Link>
                </li>
                <li>
                <Link to="/" style={headingCSS}>HOME</Link>
                </li>
              </ul>
          </div>
          
      </div>
    </React.Fragment>
  )
}

export default AboutPage