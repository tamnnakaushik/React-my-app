import React from 'react'

export default function About(props) {
  
  //  const [myStyle, setMyStyle] = useState({
  //       color: 'black', 
  //       backgroundColor: 'white'
  //     })

  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'#042743':'white',
    border: '2px solid',
    borderColor:  props.mode === 'dark'?'white':'#042743'
  }
    // const [btntext, setBtnText] = useState("enable dark mode")

//  const toggleStyle = ()=>{
//     if(myStyle.color === 'black'){
//         setMyStyle({

//             color: 'white',
//             backgroundColor: 'black',
//         border: '2px solid white'
//         })
//         setBtnText("enable light mode")
//     }
//     else{
//        setMyStyle({

//         color: 'black',
//         backgroundColor: 'white'
//        })
//         setBtnText("enable dark mode")
//     }
// }
    return (
    
    <div className='container' style={myStyle}>
    <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, charcter count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a free characters counter tool that provides instant characters count & word count stastics for a given text. TextUtils reports the number of words and character. Thus it is suitable for waiting text with word charcter limit. 
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter software  works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essay etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
