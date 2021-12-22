import React, {useState} from 'react';

export default function Header(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () =>{
        let newtext = text.toUpperCase()
        //console.log('uppercase clicke')
        setText(newtext)
    }

    const handleLoClick = () =>{
        let newtext = text.toLowerCase()
        //console.log('uppercase clicke')
        setText(newtext)
    }

    const handleClearClick = () =>{
        //let newtext = text.toLowerCase()
        //console.log('uppercase clicke')
        setText("")
    }

    const handleOnChange = (event) =>{
        //console.log('onchange clicke')
        setText(event.target.value);
    }

    const toggleMode = () =>{
        //let newtext = text.toLowerCase()
        //console.log('uppercase clicke')
        setText("hello togle")
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    

    let myStyle={
        border: "2px solid red",
        padding:"20px",
        margin:"10px"
    }
    return (
        <>
        <div class="container">
        <h1>{props.heading} - via props</h1>
        <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" value={text} rows="10" onChange={handleOnChange}></textarea>
        </div>
        <button type="button" class="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
        <button type="button" class="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
        <button type="button" class="btn btn-danger mx-2" onClick={handleClearClick}>Clear All</button>
        </div>
        <div className="container my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>Readability :{Math.floor(0.008 * text.split(" ").length)} Minutes</p>
        <h2>Preview</h2>
        <p style={myStyle}>{text}</p>
        </div>
        </>
    )
}
