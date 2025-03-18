import React, { useState } from 'react'

function Second() {
  const [count, setCount] = useState(0) 
    return (
    <div>
      <h4>{count}</h4>
      <button onClick={()=> setCount(count +1)}></button>
      <button></button>
      
    </div>
  )
}

export default Second
