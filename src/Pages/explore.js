import React from "react";
import './explore.css';
import styled from "styled-components";

export const Explore = () => {
    const Card = (props) => {
        const Card1 = styled.div`
        ${props.type === "math" ? "background: #dd4444;" : ""}
        ${props.type === "chemistry" ? "background: var(--blue-bantuin)" : ""}
        `;
        return (
            <Card1 className="card-in">
                <h3>Username</h3>
                <p>{props.type}</p>
                <p>Ini pertanyaan  </p>
            </Card1>
        )
    }
    return(
        <header className="App-header-main">
            <div className="main-card">
                <h1>Last Minute Problem</h1>
                  <div className="bungkus">
                    <Card type="math" />
                    <Card type="chemistry" />
                  </div>
                  <a href="/">→ Lihat semua</a>
            </div>
        </header>
    )
}