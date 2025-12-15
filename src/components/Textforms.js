
import React,{ useState } from 'react';
import PropTypes from 'prop-types';



export default function Textforms(props) {

 

  const updateText=(event)=>{
    console.log("Uppercase was clicked");
    setText(event.target.value);
  }
  const onUpcase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    
  }
   const onLowcase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    
  }
   const onClear=()=>{
    let newText="";
    setText(newText);
    
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCopy=()=>{
    let text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
   const [text, setText] = useState("");

  return (
    <div>
  <div className="form-group">
    <label style={{display:'flex',justifyContent:'center',color:props.mode==='light'?'black':'white'}} htmlFor="exampleFormControlTextarea1">
       <h3> Write Something</h3>
        </label>
    <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='light'?'white':'#212529',borderWidth: '3px'}} value={text} onChange={updateText} id="exampleFormControlTextarea1" rows="5" required ></textarea>
  </div>
   <button className="btn btn-primary" onClick={onUpcase}>Convert UpperCase</button>
   <button className="btn btn-primary mx-2" onClick={onLowcase}>Convert LowerCase</button>
   <button className="btn btn-primary mx-2" onClick={onClear}>Clear</button>
   <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
   <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
   <div className="form-group" />
    <div className={`container2 my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something Above The Text Box To Preview It Here😊👍👌"}</p>
    </div>
    </div>
  )
}
