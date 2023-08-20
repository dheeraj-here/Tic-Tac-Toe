import React, { useState } from 'react'
import Square from '../Square/Square'
import './board.css';

export default function Board() {
    const [flag, setFlag] = useState(true)
    const [arr, setArr] = useState(Array(9).fill(null))

    function win(arr){
        const lines =[
            [0,1,2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
    ];
    for(let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if(arr[a] && arr[a]===arr[b] && arr[b]===arr[c]){
            return arr[a];
        }
    }
    return null;
    }

    const winner = win(arr);
        let status;
        if(winner){
            status = "Winner: "+ winner;
        }
        else{
            status = "Next turn: "+ (flag ? "X" : "O")
        }
    

    function handleClick(i){
        if(arr[i] || win(arr)) return;
        const sq = arr.slice();
        if(flag){
        sq[i] = "X";
        setFlag(!flag)
        }
        else{
            sq[i] = "O";
            setFlag(!flag)
        }
        setArr(sq)
    }

  return (
    <>
    <div className='status'>{status}</div>
    <div className='row'>
        <Square value={arr[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={arr[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={arr[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className='row'>
        <Square value={arr[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={arr[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={arr[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className='row'>
        <Square value={arr[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={arr[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={arr[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    </>
  )
}
