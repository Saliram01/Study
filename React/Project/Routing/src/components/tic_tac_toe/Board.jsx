import React, { useState } from "react";
import Square from "./Square";

function Board() {
    const [state ,setState] = useState(Array(9).fill(null));
    const [isTurn,setTurn] = useState(true);

    const checkWinner = (() => {
      const winnerBox = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ];

      for(let logic of winnerBox){
        const [a,b,c] = logic;
        if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
          return state[a];
        }
      }
      return false;
    });

    const isWinner = checkWinner();

    const handleClick = (i) => {
      if(state[i] !== null){
        return;
      }
      
        state[i] = isTurn ? 'X' : '0'
        setState(state);
        setTurn(!isTurn);
    }
    
  const  handleReset = (() => {
    setState(Array(9).fill(null))
  })

  return (
    <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center',height : '80vh',flexDirection : 'column'}}>
      <h4 style={{color : 'white', margin : '30px 0'}} className={isWinner ? 'hide' : ''} >Player {isTurn ? 'X' : '0'} Please Move</h4>
      <div style={{display: "flex",justifyContent: "space-evenly",alignItems: "center",}}>
        {isWinner ? (<div style={{display : 'flex',flexDirection : 'column',gap : '10px'}}>
        
        <p style={{color : 'white',}}> {isWinner} Won The Game</p>
        <button style={{padding : '5px 15px'}} onClick={handleReset}>Play Again</button>

        </div>) : (<>
        <div>
          <Square onClick = {() => handleClick(0)} value = {state[0]}/>
          <Square onClick = {() => handleClick(1)} value = {state[1]}/>
          <Square onClick = {() => handleClick(2)} value = {state[2]}/>
        </div>
        <div>
          <Square onClick = {() => handleClick(3)} value = {state[3]}/>
          <Square onClick = {() => handleClick(4)} value = {state[4]}/>
          <Square onClick = {() => handleClick(5)} value = {state[5]}/>
        </div>
        <div>
          <Square onClick = {() => handleClick(6)} value = {state[6]}/>
          <Square onClick = {() => handleClick(7)} value = {state[7]}/>
          <Square onClick = {() => handleClick(8)} value = {state[8]}/>
        </div>
        
        </>)
        }
        
      </div>
      <button className={isWinner ? 'hide' : ''} onClick={handleReset} style={{margin : '20px 0',padding : '5px 25px'}}>Reset</button>
    </div>
  );
}

export default Board;
