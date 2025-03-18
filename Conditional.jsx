import React from 'react'

function Conditional({isLoggedin}) 
 {
  return (
    <div>
        {isLoggedin? <p>Hello, logged in user</p> :
        <p>Please log in to see the content.</p>}
    </div>
  )
}

export default Conditional 
