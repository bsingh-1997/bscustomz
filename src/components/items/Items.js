import React from 'react'

export default function Items(props) {
  return (
    <>
        {props.items.map((item)=>{
            return(
                <li key={item.id}>
                    <div key={item.id}>
                        <img src={props.imgsrc} alt={props.name}></img>
                        <p>{props.description}</p>
                    </div>
                </li>
            )
        })}

    </>
  )
}
