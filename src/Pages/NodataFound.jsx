import React from 'react'
import { NavLink } from "react-router-dom"
import "../styles/NoDataFoundPage.css"

const NodataFound = () => {
  return (
    <div className='no-Data-Found-Page'>
        <div className='msg'>
           <p>Failing To Find Data to Display  &#128534;</p> 
           <NavLink to="/"> <button>&#x21FD; Home Page</button></NavLink>
        </div>
    </div>
  )
}

export default NodataFound
