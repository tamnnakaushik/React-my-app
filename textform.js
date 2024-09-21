import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUPClick = ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    // setText("you have clicked on handleUpClick")
        setText(newText);
         props.showAlert("converted to uppercase", "success");
      }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toLowerCase();
    // setText("you have clicked on handleUpClick")
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("text clear", "success");
  }
  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }

const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("copied to clipboard", "success");
}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(""))
  props.showAlert("removed extra spaces", "success");
}
// const SpeakClick = () => {
//   const msg = new SpeechSynthesisUtterance();
//   msg.text = text;
//   window.speechSynthesis.speak(msg);
//  };



  const [text, setText] = useState(""); 
// text = "new text"; //wrong way to changethe state
// setText("new text"); //correct way to changethe state
  return (
    <>
    <div className='conatiner' style={{color: props.mode==='dark'?'white':'#042743'}}>  
    <h1 className='mb-2'>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>   
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>Convert the Uppercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert the Lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Text</button>
     </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>  
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  ) 
}


