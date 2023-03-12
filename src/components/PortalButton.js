import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=(props)=>{
  
    return (
        <div>
            <button id="button" onClick={props.buttonclick}>Click</button>
        </div>
        
    )
}
export default PortalButton;
