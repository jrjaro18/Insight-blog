import React from 'react'
import "./CSS/Searchbar.css"
import TextField from '@mui/material/TextField';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const Searchbar = () => {
    return (
        <div>
            <form>
                <div className="searchbar">
                    <TextField id="filled-basic" label="Search" variant="filled" placeholder="Topic" style={{ marginLeft: "1vw", marginTop: "1vh", width: "92vw", backgroundColor: "whitesmoke", borderColor: "transparent" }} />
                    <SearchSharpIcon style={{ marginLeft: "1vw", cursor: "pointer", fontSize: "2rem", backgroundColor: "white", }} />

                </div>
            </form>
        </div>
    )
}

export default Searchbar