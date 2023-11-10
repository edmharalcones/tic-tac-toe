import React from "react";
import "./Square.css";
// checks if the value of square is X or O and classname is changed based on the value
export const Square = ({value, onClick}) => {
    const style = value === "X" ? "square x" : "square o";
    return(
        <button className={style} onClick={onClick}>{value}</button>
    )
}