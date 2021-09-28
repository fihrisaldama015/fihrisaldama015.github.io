import logo from './Pages/Assets/logo.svg';
// import lemon from './lemon.png';
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
    const LogOutButton = styled.button`
    ${props => this.props.status === true ? "" :"display:none;"}
    margin: 0 1vw;
    border: 2px solid var(--react-blue);
    border-radius: 10px;
    padding: 5px 10px;
    background-color: var(--react-blue);
    color:var(--white);
    transition: .2s;
    &:hover {
      background-color: var(--white);
      color:var(--react-blue);
      font-weight: 700;
      transition: .2s;
    }
    `;
    return (
    <div>
      <p>{this.props.status === true ? this.props.username :"Guest"}</p>
      <LogOutButton onClick={SignOutGoogle}>Keluar</LogOutButton>
    </div>
    )
  }
}


// function App() {
//   return (
//     <Router>
//       <div>
//           {/* <div className="Main-logo">
//           <img src={logo2} alt="App-logo"/>
//           </div> */}
//         <nav className="App-nav">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/button">Button</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/test">Test</Link>
//             </li>
//           </ul>
//           <div className="user-profile">
//             <Profile status={this.props.userLogin}/>
//           </div>
//         </nav>
//         <div className="App">
//           <header className="App-header">
//             <Switch>
              
//               <Route path="/button">
//                 <ReactImg />
//                 <Button />
//               </Route>
//               <Route path="/about">
//                 <h1>About me</h1>
//                 <ReactImg />
//                 <About />
//               </Route>
//               <Route path="/test">
//                 <Test />
//               </Route>
//               <Route path="/login">
//                 <Register />
//               </Route>
//               <Route path="/">
//                 <ReactImg />
//                 <h1>Welcome to home!</h1>
//                 <Link to="/login">
//                   <BlueButton>Coba Sekarang</BlueButton>
//                 </Link>
//               </Route>
//             </Switch>
//           </header>
//         </div>
//       </div>
//     </Router>
//   );
// }

class App extends React.Component {
  render(){
    const Homepage = () => {
      if(this.props.userLogin === true){
        return (
          <header className="App-header">
            <img className="user-profile-picture" src={this.props.userPic} alt="user" />
            <h1>Hi {this.props.username} !</h1>
            <p>Konten menyusul :)</p>
          </header>
        )
      }else{
        return(
          <header className="App-header-home">
          <div className="opening">
            <ReactImg />
            <h1>Bantuin.</h1>
            <p>&emsp;&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non. Bibendum est ultricies integer quis. Lorem ipsum dolor sit amet. Imperdiet sed euismod nisi porta lorem mollis aliquam ut.</p>
            <Link to="/login">
              <BlueButton>Coba Sekarang</BlueButton>
            </Link>
          </div>
          </header>
        )
      }
    }
    return (
      <Router>
        <div>
            {/* <div className="Main-logo">
            <img src={logo2} alt="App-logo"/>
            </div> */}
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
            <div className="user-profile">
              <Profile status={this.props.userLogin} username={this.props.username}/>
            </div>
          </nav>
          <div className="App">
            
            <Switch>
              {/* <header className="App-header"> */}
              
              <Route path="/button">
                
                <Button />
              </Route>
              <Route path="/about">
                <About username={this.props.username} email={this.props.email}/>
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
