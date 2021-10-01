import logo from './Pages/Assets/logo.svg';
import logo1 from './Pages/Assets/Asset1.svg';
import ProfPic from './Pages/Assets/profile_placeholder.png';
import './App.css';
import React from 'react';
import {Button} from './Pages/button';
import { BlueButton } from './Pages/button';
import {About} from './Pages/about';
import { Test } from './Pages/test';
import { Register } from './Pages/register/register';
import styled from 'styled-components';
import { SignOutGoogle } from '.';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export const ReactImg = () => {
  return(
    <img src={logo} className="App-logo" alt="logo" />
  )
}
export class Profile extends React.Component {
  render() {
    return (
    <div id="user-info">
      <p>{this.props.status === true ? this.props.username :"Guest"}</p>
      <img className="user-profile-picture-nav" src={this.props.userPic || ProfPic} alt="user" />
      <Router>
        <Link to="/">
      {this.props.status === true ? <button className="nav-logout-button" onClick={SignOutGoogle}>Keluar</button> : null}
        </Link>
      </Router>
    </div>
    )
  }
}

class App extends React.Component {
  render(){
    const Homepage = () => {
      if(this.props.userLogin === true){
        return (
          <header className="App-header">
            <h1>Hi {this.props.username} !</h1>
            <p>Konten menyusul :)</p>
          </header>
        )
      }
      else{
        return(
          <header className="App-header-home">
          <div className="opening">
            <ReactImg />
            <h1>Project.</h1>
            <p>&emsp;&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non. Bibendum est ultricies integer quis. Lorem ipsum dolor sit amet. Imperdiet sed euismod nisi porta lorem mollis aliquam ut.</p>
            <Link to="/login">
              <button className="blue-button">Coba Sekarang</button>
            </Link>
          </div>
          </header>
        )
      }
    }
  
    return (
      <Router>
        <div>
          <nav className="App-nav">
            <ul>
              <Link to="/">
              <img className="Main-logo" src={logo1} alt="App-logo" />
                <li>Home</li>
              </Link>
              <Link to="/button">
                <li>Explore</li>
              </Link>
              <Link to="/test">
                <li>Blog</li>
              </Link>
              <Link to="/about">
                <li>Profile</li>
              </Link>
            </ul>
            <div className="user-profile">
              <Profile userPic={this.props.userPic} status={this.props.userLogin} username={this.props.username}/>
            </div>
          </nav>
          <div className="App">
            
            <Switch>
              {/* <header className="App-header"> */}
              
              <Route path="/button">
                
                <Button />
              </Route>
              <Route path="/about">
                <About status={this.props.userLogin} username={this.props.username} email={this.props.email}/>
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/login" render={() => (
                this.props.userLogin ? <Redirect to="/" />: <Register />)}>
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
              {/* </header> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
