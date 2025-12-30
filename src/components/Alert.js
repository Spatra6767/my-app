import React from 'react';
export default function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase(); 
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <div className={`alert alert-${props.Alert?.type}`} role="alert">
        {props.Alert && <div>
          <strong>{capitalize(props.Alert.type)}</strong>-{props.Alert.msg}
        </div>}
   </div>

  );
};