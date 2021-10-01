import React from 'react';
import {ReactImg} from '../App';
import { SignOutGoogle } from '..';
import {
    HashRouter as Router,
    Link
  } from "react-router-dom";

class AboutProfile extends React.Component {
    render() {
    return (
    <div id="profile-log-out">
      {console.log(this.props.username)}
      <button className="logout-button" onClick={SignOutGoogle}>Keluar</button>
    </div>
    )
  }
}

export const About = (props) => {
    return (
        <header className="App-header">
            <ReactImg />
            <h1>My Profile</h1>
            <p>Name : {props.username || "User"}</p>
            <p>Email : {props.email || "User@gmail.com"}</p>
            <p>
            {props.username != null ? 
            <Router>
                <Link to="/">
                    <AboutProfile username={props.username}/>
                </Link>
            </Router>
            :null}</p>
            
        </header>
    )
}