import React from 'react'
import { NavLink } from "react-router-dom"
import "../styles/ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className='error-container'>
      <p>Error - 404: Page not Found &#128534;</p>
      <NavLink to="/"><button>&#x21FD; Home Page</button></NavLink>
    </div>
  )
}

export default ErrorPage
