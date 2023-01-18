import React from 'react'
import Navbar from './Navbar'
import Card from './Card/Card'
import Draggable from 'react-draggable'

function Home() {
  return (
    <div style={{backgroundColor:"#EBEBF0"}} className='Wrap'>
    <Navbar/>
    <div className='Main'>
    <div className='SideBar'></div>
    <Card/> 
    </div>
    
    
    </div>
  )
}

export default Home