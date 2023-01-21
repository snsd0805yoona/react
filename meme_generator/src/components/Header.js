import React from "react";
import troll from "../style/Troll_Face.png"
export default function Header() {
    return (
        <header>
            <img className="troll" src={troll} alt="troll_face"/>
            <h2 className="header--title">Meme's Generator</h2>
            <h4 className="header--subtitle">Grace's project</h4>
        </header>
    )
}