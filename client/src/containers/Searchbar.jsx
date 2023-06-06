import React, { useEffect, useState } from 'react'
import "./CSS/Searchbar.css"
import TextField from '@mui/material/TextField';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        localStorage.setItem("search", search);
        window.location.href = "/search";
    }
    useEffect(() => {
        if(search!==localStorage.getItem('search')){
            localStorage.removeItem('search')
        }},[search]);

    return (
        <div>
            <form onSubmit={handleClick}>
                <div className="searchbar">
                    <TextField id="filled-basic" label="" variant="filled" value={search!==""?search:localStorage.getItem('search')} placeholder="Topic" style={{ marginLeft: "1vw", marginTop: "1vh", width: "92vw", backgroundColor: "whitesmoke", borderColor: "transparent", fontSize:"3vmax" }} onChange={(e) => { setSearch(e.target.value) }} />
                    <SearchSharpIcon style={{ marginLeft: "1vw", cursor: "pointer", fontSize: "2rem", backgroundColor: "white", margin: "0px auto" }} onClick={handleClick}/>
                </div>
            </form>
        </div>
    )
}

export default Searchbar