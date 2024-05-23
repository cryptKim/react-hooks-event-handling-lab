// Code Keypad Component Here
import React from "react";

function Keypad (){
function Keypad(){

    function handleChange(){
        console.log("Entering password...")
    }
    return (
        <div>
        <div>
            <input type="password" onChange={handleChange} />
        </div>
        </div>
    )
}}

export default Keypad;