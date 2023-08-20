import React, { useState } from 'react'
import "./App.css"
import Board from './Components/Board/Board'

function refreshPage() {
  window.location.reload(false);
}

export default function App() {
  return (
    <>
    <Board />
    <button className='st' onClick={refreshPage}>Start The Game</button>
    </>
  )
}
