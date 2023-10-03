import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer' style={{
        position:'fixed',
        bottom:0,
        left:0,
        right:0
    }}>
      <h4 className='text-center'>
        All Right Reserved &copy; MY technology
      </h4>
      <p className='text-center mt-1'>
        <Link to='/about'>About</Link>
        |
        <Link to='/contact'>Contact</Link>
        |
        <Link to='/policy'>Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Footer