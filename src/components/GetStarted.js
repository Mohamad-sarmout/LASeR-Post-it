import React from 'react'
import "./GetStarted.css";
import Arrange from '../assets/Arranging Files.png';
function GetStarted() {
  return (
    <div className='getStarted'>
        <h1 className='title'>Post-It App</h1>
        <h4 className='title'>Let's do this</h4>
        <img src={Arrange}/>
        <h4 className='title'>Gets things done with Post-It</h4>
        <button className='btn'>Get Started</button>
    </div>
  )
}

export default GetStarted