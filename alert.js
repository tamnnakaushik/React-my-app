import React from 'react'

 function alert(props) {
  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: '50px'}}>
          {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
  </div>  
  )
}
export default alert