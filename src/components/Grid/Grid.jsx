import { useState } from "react"
import "./Grid.css"
import Card from "../Card/Card";

function Grid({ numberOfCards }) {
    const [ board, setBoard ] = useState(Array(numberOfCards).fill());
    const [ turn, setTurn ] = useState(true);
  return (
    <div  className="grid-wrapper">
      <h2 className="turn">Current Turn: {(turn) ? 'O'  : 'X'}</h2>
        <div className="grid">
          {board.map((el, idx) => <Card key={idx} />)}
        </div>
    </div>
  )
}

export default Grid
