import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        console.log("lowercase clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("onchange clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
    // setText('New text');
    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-warning mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Approximate minute to read the sentence is {0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
