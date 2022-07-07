import React, {useState} from "react"
import memesData from "../memesData"

export default function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = useState(memesData)


    const handleClick = (event) => {

        event.preventDefault()
       
        
        //array of object data
        const memesArray = allMemeImages.data.memes

        console.log(memesArray)

        //  get random index from memesData
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        console.log(randomNumber)

        //get individual meme
        const data = memesArray[randomNumber]
        console.log("meme object:", data)

        // get individual url
        const url =  memesArray[randomNumber].url
        console.log("url", url)

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })

    }

    const handleChange = (event) => {
  
    }
    
    
    
    return(
        <main>
            <form className="form">
                <input className="form--input" type="text" name="topText" value={meme.topText} />
                <input className="form--input" type="text" name="bottomText" value={meme.bottomText}/>
                <input className="form--botton" type="submit" value="Get a new meme image 🖼" onClick={handleClick} />
            </form>
            <img src={meme.randomImage} alt={meme.randomImage} className="meme--image"/>
        </main>
       
    )
}