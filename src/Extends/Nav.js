import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='web-nav'>
         <ul>
                      <li><Link to={'/'}>Car</Link></li>
           </ul>           
         </div>
    </div>
  )
}

export default Nav