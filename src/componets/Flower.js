import React from 'react';


function Flower(props) {
  return (
    <>
    <div className='cards'>
        <h3>{props.title}</h3>
        <img src={props.image} alt={props.title}/>
        <p>{props.text}</p>
        <button>{props.btn}</button>
        <hr/>
    </div>
    </>
  )
}

export default Flower