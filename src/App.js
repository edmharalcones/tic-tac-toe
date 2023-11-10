
import './App.css';
import React, {useState} from 'react';
import {Game} from "./components/Game";
// sets tictactoe boxes and boardgame state
function App() {
  const [game, setGame] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
// when gamePlay function is called , will mark the box with X or O in alternating order
  const gamePlay = (boxIdx) => {
      const updateGame = game.map((value,idx) => {
        if (idx === boxIdx) {
          return xPlayer === true ? "X" : "O";
        } else{
          return value;
        }
      } )

      setGame(updateGame);

      setXPlayer(!xPlayer);
  }
  // onclick function for gamePlay
  return (
    <div className="App">
      <Game game={game} onClick={gamePlay}/>
      
    </div>
  );
}

export default App;
