//import React, {useState} from 'react';
import { BlueButton } from './button';
import { useState } from 'react';

export function Test() {
    const [state, setState] = useState("JUDUL")
    const clickHandler = () => {
        if (state === "BERUBAH") {
            setState("JUDUL")
        }else{
            setState("BERUBAH")
        }
    }
    console.log(state);
    return (
        <header className="App-header">
        <h1>{state}</h1>
        <BlueButton onClick={clickHandler}>CHANGE !</BlueButton>
        </header>
    )
}