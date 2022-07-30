import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase()
        setText(newText)
    
    }
    const handleExtraSpaces = ()=>{
        //console.log("Remove extra spaceswas clicked"+text);
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        //console.log("Clear was clicked"+text);
        let newText= '';
        setText(newText)
    }
    const handleCopy = ()=>{
        //console.log("Copy was clicked"+text);
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleOnClick = (event)=>{
        //console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className='conatiner' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value = {text} onChange={handleOnClick} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-danger mx-2" onClick={handleUpClick}><b>Convert to Uppercase</b></button>
            <button className="btn btn-warning mx-2" onClick={handleLoClick}><b>Convert to Lowercase</b></button>
            <button className="btn btn-info mx-2" onClick={handleClearClick}><b>Clear Text</b></button>
            <button className="btn btn-dark mx-2" onClick={handleCopy}><b>Copy Text</b></button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}><b>Remove Extra Spaces</b></button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: 'Enter something in the text box above to preview it here'}</p>

        </div>

        </>
    )
}
