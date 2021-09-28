import { BlueButton } from "../button";
import './index.css';
import { RegisterWithGoogle } from "../../index";


export const Register = () => {
    return(
        <header className="App-header">
            <div className="card">
            <h1>Register</h1><br />
            <form>
                <input className="register-input" type="text" placeholder="Username"></input>
                <input className="register-input" type="password" placeholder="Password"></input>
                <BlueButton type="submit">Daftar</BlueButton>
                <button className="register-link"> Masuk</button>
            </form>
            <br />
            <br />
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