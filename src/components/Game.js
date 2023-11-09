import React from 'react'
import {Square} from "./Square"
import "./Game.css"
export const Game = ({game, onClick}) => {
  return (
    <div className="game">
        {game.map((value, idx) => {
            return <Square value={value} onClick={() =>value === null && onClick(idx)} />
        })}
        </div>
  )
}
