import React from 'react'
import "./CSS/Home.css"

import Navbar from '../containers/Navbar'
import Searchbar from '../containers/Searchbar'
import Tiles from '../containers/Tiles'
const Home = () => {
  return (

    <React.Fragment>
        <Navbar/>
        <Searchbar/>
        <br/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
    </React.Fragment>

  )
}

export default Home