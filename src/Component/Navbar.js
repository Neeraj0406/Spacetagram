import React from 'react'
import nasa_logo from "../images/nasa_img.jpg"
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <div id="nav_container">
                <img src={nasa_logo}/>
                <h2> Spacetagram</h2>
            </div>
        </>
    )
}

export default Navbar
