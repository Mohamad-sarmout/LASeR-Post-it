import React from 'react'
import "./GetStarted.css";
import Arrange from '../../assets/Arranging Files.png';
import LeftEllipse from '../../assets/Ellipse 3.png';
import RightEllipse from '../../assets/Ellipse 4.png';
function GetStarted() {

  return (
    <div className='getStarted'>
        <h1 className='title'>Post-It App</h1>
        <h4 className='title'>Let's do this</h4>
        <img className='arrangeImg' src={Arrange} alt="blabla"/>
        <h2 className='title'>Gets things done with Post-It</h2>
        <button className='btnn'>Get Started</button>
        <img className="leftEllipse" src={LeftEllipse} alt="blabla"/>
        <img className="rightEllipse" src={RightEllipse} alt="blabla"/>
    </div>
  )
}

export default GetStarted