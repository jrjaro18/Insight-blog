import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../containers/Navbar'
import "./CSS/AuthorPage.css"
import Tiles from '../containers/Tiles'

const AuthorPage = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000/author-page/:' + localStorage.getItem("id")).then((response) => {
            setData(response.data)
            //console.log(response.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <React.Fragment>
            <Navbar />
            <div className='authorpageheading'>Your Blogs</div >
            {
                data?(
                    data.map((data, index) => {
                        return <Tiles key={index} data={data} />
                    })
                ) : (
                    <>Loading...</>
                )
            }
        </React.Fragment>
    )
}

export default AuthorPage