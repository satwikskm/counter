import React,{ useState} from 'react'
import './counter.component.css'

function Counter() {
    const [counter, setCounter] = useState(0);
  return (
      
    <div className='counter'>
        
        <div className="screen">
            <h1>Count Value</h1>
            <h1>{counter}</h1>
        </div>
        <div className="button-container">
        <button className='btn' onClick={()=>{setCounter(counter+1)}}>Increase</button>
        <button className='btn' onDoubleClick={()=>{setCounter(0)}}>Reset</button>
        
        <button className='btn' onClick={()=>{counter==0?alert("Cannot be less than 0"):setCounter(counter-1)}}>Decrease</button>
        </div>
        <h3>Double Click to reset</h3>
        
    </div>
  )
}



export default Counter