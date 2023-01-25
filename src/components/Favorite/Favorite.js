import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../post/Post'

export default function Favorite() {
  const Cards = useSelector(state => state.favorite)
  return (
    <div>
    <h1>Favorite</h1>
    <div>{
      Cards.map((card)=>(
        <Post />
      ))
    }</div>
        </div>
  )
}
