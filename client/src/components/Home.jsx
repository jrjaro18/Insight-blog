import React, { useEffect } from 'react'
import "./CSS/Home.css"
import axios from 'axios'
import Navbar from '../containers/Navbar'
import Searchbar from '../containers/Searchbar'
import Tiles from '../containers/Tiles'

const Home = () => {
  localStorage.removeItem('search')
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios.get('https://insight-blog.onrender.com/tile-data').then((res) => {
      //console.log(res.data)
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <React.Fragment>
      <div className='homepage'>
        <Navbar />
        <Searchbar />
        <br />
        {data.map((dat, i) => {
          return <Tiles key={i} data={dat} />
        }
        )}
      </div>
    </React.Fragment>
  )
}

export default Home