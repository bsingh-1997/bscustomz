import React from 'react'

export default function Alert(props) {
    const capitlize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
    props.alert && <div className='container my-1'>
        <div className={`alert alert-${props.alert.type} `} role="alert">
           {capitlize(props.alert.type)} : {props.alert.message}
        </div>
    </div>
  )
}