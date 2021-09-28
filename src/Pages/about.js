import React from 'react';
import {ReactImg} from '../App';

export const About = (props) => {
    return (
        <header className="App-header">
            <ReactImg />
            <h1>My Profile</h1>
            <p>Name : {props.username || "User"}</p>
            <p>Email : {props.email || "User@gmail.com"}</p>
        </header>
    )
}