import React, { useRef } from 'react'

const Play = ({setUsername}) => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }
    return (
        <div className="start">
            <div className="kbc_game"><h1>🏆 KBC Game 🏆</h1></div>
            <input placeholder="enter your name" className="startInput" ref={inputRef} />
            <button className="startButton" onClick={handleClick}>play</button>
        </div>
    )
}

export default Play
