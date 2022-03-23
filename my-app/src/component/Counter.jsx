import React, { useState } from 'react'

function Counter() {
const [count,setCount]=useState(0)

function handleInc(){
    setCount(count+1)
}
function handleDec(){
    setCount(count-1)
}

  return (
    <div>
        <h1>COUNTER APP</h1>
    
        <div>{count}</div>
        <button onClick={handleInc} >INCREASE</button>
        <button onClick={handleDec} >DECREASE</button>
        
        </div>
  )
}

export default Counter