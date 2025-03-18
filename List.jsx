import React from 'react'

function List() {
  const list = ["Product1","Product2","Product3","Product4","Product5","Product6"]
    return (
    <div>
      <ul>
        {
        list.map((item,index)=>(
            <li key={index}>{item}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default List
