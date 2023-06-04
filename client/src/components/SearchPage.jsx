import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../containers/Navbar'
import Searchbar from '../containers/Searchbar'
import Tiles from '../containers/Tiles'
import "./CSS/SearchPage.css"

const SearchPage = () => {
    const search = localStorage.getItem("search");
    console.log(search);
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/search/:${search}`).then((res) => {
            console.log(res.data[0].item);
            setSearchResults(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            <Searchbar />
            {searchResults!==undefined? (
                searchResults.map((result) => {
                    return <Tiles data={result.item} />
                }
                )
            ) : (<h1>No results found</h1>)}
        </React.Fragment>
    )
}

export default SearchPage