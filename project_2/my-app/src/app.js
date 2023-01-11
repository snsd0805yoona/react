import React from "react";
import {Email, LinkedIn} from "./components/button";
import Photo from "./components/photo";
import Main from "./components/main";
import Contact from "./components/contact";
import Intro from "./components/intro";

export default function App(){
    return(
        <div className="container">
            <Photo/>
            <Intro/>
            <div className="buttons">
                <Email/>
                <LinkedIn/>
            </div>
            <Main/>
            <Contact/>
        </div>
    )
}