import React from 'react';
import styled from 'styled-components';
import {ReactImg} from '../App'

export const BlueButton = styled.button`
    color:var(--white);
    background-color:#61dafb;
    border:2px solid #61dafb;
    border-radius:10px;
    padding: 10px;
    font-weight:600;
    box-shadow: 5px 5px 30px 10px var(--blue-shadow);
    margin-top:2vh;
    transition:0.2s;
    &:hover {
      color:#61dafb;
      background-color:var(--white);
      transition:0.2s;
    }
`;

export class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      judul:"Poe Button",
      isi:""};
    this.clickHandler = this.clickHandler.bind(this);
    this.clickMagic = this.clickMagic.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.judul = this.judul.bind(this);
  };clickHandler() {
    this.setState({judul:"Poe Button",isi:""});
  };clickMagic() {
    this.setState({judul:"NGERONGG AWOKOWAKO"});
  };hoverHandler() {
    this.setState({isi:"POE"});
  };judul() {
    this.setState({judul:"LULUL GAOLEE"});
  }

  render() {
    const Container = styled.div`
    background-color: #61dafb;
    color:#282c34;
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: 2px solid #61dafb;
    border-radius:10px;
    font-weight:600;
    transition: 0.2s;
    min-height:12vh;
    min-width:1vh;
    max-width:10vh;
    text-align:center;
    &:hover {
      ${state => this.state.isi === "" ? "border-radius:20px;" : "border-radius:10px;"}
      background-color: #282c34;
      color:#61dafb;
    }
  `;
    return (
      <header className="App-header">
        <ReactImg />
        <p onMouseOver={this.judul}>
        {this.state.judul}
        </p>
        <div>
          <Container>
            <p>{this.state.isi}</p>
          </Container>
          <BlueButton onClick={this.clickMagic} onMouseOver={this.hoverHandler}>
              Magic Button
          </BlueButton><br />
          <BlueButton onClick={this.clickHandler}>
              Remove
          </BlueButton>
        </div>
      </header>
    );
  }
}
