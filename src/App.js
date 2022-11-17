import React from 'react';
import './App.css';
import Flower from './componets/Flower';
import flowerData from "./componets/Flowersdata";

 const flowersInfo=(value)=>{
      return(
        <>
            <Flower title={value.title}
                    image={value.image}
                    text={value.text}
                    btn={value.btn}/>
        </>
      )
 }

function App() {
  return (
   <>
   <h1>about flower</h1>
   <div className='container'>
      {flowerData.map(flowersInfo)}
    
   </div>
   </>
  );
}

export default App;
