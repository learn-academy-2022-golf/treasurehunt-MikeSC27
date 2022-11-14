import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const playGame = () => {
    setBoard ([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
    
    // return (
    //   <button onClick={()=> startGame = [board, setBoard]}
    // )
  }

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]

    if(index === treasureLocation) {
      updatedBoard[index] = "💰"
      setBoard(updatedBoard)
    } else if(index === bombLocation) {
      updatedBoard[index] = "💣"
      setBoard(updatedBoard)
    } else {
      updatedBoard[index] = "🏝️"
      setBoard(updatedBoard)
    }


    // updatedBoard[index] = "🏝️"
    // setBoard(updatedBoard)

    // updatedBoard[index] = "🏝️"
    // setBoard(updatedBoard)

  }

  return (
    <>
      <div>
      <h2>Play Game</h2>

      </div>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return (
          <Square 
            value={value} 
            key={index}
            index={index} 
            handleGamePlay={handleGamePlay}
          />
        )
      })}
      </div>
    </>
  )
}

export default App
