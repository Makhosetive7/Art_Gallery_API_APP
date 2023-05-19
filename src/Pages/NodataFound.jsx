import React from 'react'
import "../styles/NoDataFoundPage.css"

const NodataFound = () => {
  return (
    <div className='no-Data-Found-Page'>
        <div className='msg'>
           <p>Failing To Find Data to Display  &#128534;</p> 
           <button>&#x21FD; Home Page</button>
        </div>
    </div>
  )
}

export default NodataFound
