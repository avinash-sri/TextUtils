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

    const [text, setText] = useState('');
    // setText('New text');
    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? '#1c3d6b' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-warning mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Approximate minute to read the sentence is {0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text in textbox above to preview here."}</p>
            </div>
        </>
    )
}
