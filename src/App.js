
import './App.css';
import React, {useState} from 'react';
import {Game} from "./components/Game";
function App() {
  const [game, setGame] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);

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
  
  return (
    <div className="App">
      <Game game={game} onClick={gamePlay}/>
      
    </div>
  );
}

export default App;
