import { useState } from "react"
import "./Grid.css"
import Card from "../Card/Card";
import isWinner from "../../helpers/checkWinner.jsx"

function Grid({ numberOfCards }) {
    const [ board, setBoard ] = useState(Array(numberOfCards).fill(""));
    const [ turn, setTurn ] = useState(true);
    const [ winner, setWinner ] = useState(null)

    function play(index) {
      if(turn == true) 
        board[index] = "O"
      else
        board[index] = "X"
      let win = isWinner(board, turn ? "O" : "X")  
      if(win) {
        setWinner(win)
      }
      console.log(board);
      setBoard([...board])  
      setTurn(!turn)
    }

    function reset() {
      setBoard(Array(numberOfCards).fill(""));
      setTurn(true);
      setWinner(null);
    }
  return (
    <div  className="grid-wrapper">
      {
        winner && (
          <>
            <h1 className="turn">Winner: {winner}</h1>
            <button className="reset" onClick={reset}>Reset Game</button>
          </>
        )
      }
      <h2 className="turn">Current Turn: {(turn) ? 'O'  : 'X'}</h2>
        <div className="grid">
          {
            board.map((el, idx) => <Card gameEnd={winner ? true : false} key={idx} player={el} onPlay={play} index={idx}  />)
          }
        </div>
    </div>
  )
}

export default Grid
