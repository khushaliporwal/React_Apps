import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, SetText] = useState('Enter your text');
    const handleUpClick = () => {
        SetText(text.toUpperCase());
        props.showAlert('Converted to upper case', 'success');
    }

    const handleLowClick = () => {
        SetText(text.toLowerCase());
        props.showAlert('Converted to lower case', 'success');
    }

    const handleOnChange = (event) =>    {
        console.log("handle on change");
        SetText(event.target.value)
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }

      }

  return (
    <>
    <div className='container' style={{color: props.mode == 'dark'? 'white' : 'black'}}>
        <div className='my-3'>
            <h1>{props.name}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode == 'dark'? 'grey' : 'white', color: props.mode == 'dark'? 'white' : 'black'}} id="myText" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower case</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
        </div>
        <div className='container'>
            <p>Word count = {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} character count = {text.trim().length}</p>
            <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
    </>
  )
}
