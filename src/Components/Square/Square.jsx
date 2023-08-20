import React, { useState } from 'react'
import './square.css'

export default function Square({value, onSquareClick}) {
    
  return (
    
    <button className='btn'  onClick={onSquareClick}>{value}</button>
    
  )
}
