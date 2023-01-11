import React from "react";
import image from "../logo192.png";
function NavBar() {
    return (
        <nav className="navbar">
            <img src={image} alt="react-small-pic"/>
            <h2>ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}

export default NavBar