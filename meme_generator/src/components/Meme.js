import React from "react";
import memesData from "../data/memesData";
export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleClick() {
        const memesArray = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random()*memesArray.length)
        setMeme(prevState =>{
            return {...prevState, randomImage: memesArray[randomNum].url}
        }) 
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        })      
        )
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="top-text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="form--input" placeholder="bottom-text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="form--button" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" name="randomImage"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}