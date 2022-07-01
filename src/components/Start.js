import React from "react"



export default function Start(props) {
    return (
        <div className="startComponent">
            <h1>Quizzical</h1>
            <p>Test your knowledge</p>
            <button onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}