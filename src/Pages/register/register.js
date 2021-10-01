import { BlueButton } from "../button";
import './index.css';
import { RegisterWithGoogle } from "../../index";
import styled from 'styled-components';


export const Register = () => {
    const P = styled.p`
        color: red;
        font-size: .4em;
    `;
    return(
        <header className="App-header">
            <div className="card">
            <h1>Daftar</h1>
            <P>*untuk sementara signIn dengan Google</P>
            <br />
            <form>
                <label for="username" id="label">Username :</label>
                <input id="username" autocomplete="off" className="register-input" type="text" placeholder="Masukkan Username..."></input>
                <label for="email" id="label">Email :</label>
                <input id="email" className="register-input" type="email" placeholder="Masukkan Email..."></input>
                <label for="password" id="label">Password :</label>
                <input min="8" id="password" className="register-input" type="password" placeholder="Masukkan Password..."></input>
                <button className="submit-button" type="submit">Daftar</button>
                <button className="register-link"> Masuk</button>
            </form>
            <h5 id="or">or</h5>
            <div className="google-btn"  onClick={RegisterWithGoogle}>
                <div className="google-icon-wrapper">
                    <img alt="google-icon" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
            </div>
            </div>
        </header>
    )
}