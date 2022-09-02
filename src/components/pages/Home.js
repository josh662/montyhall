import {Switch, Route, Router, Routes, Link, BrowserRouter} from 'react-router-dom'
import React from 'react';
import "./Home.css"

export default function Home () {

    function redirect(path) {
        window.open(path, "_self")
    }

    return (
        <section>
            <h1 className="challenge">Está a fim de resolver um desafio? &#x1f3ae;</h1>
            <div className="buttons">
                <button className="emphasis" onClick={() => redirect("/game")}>Sim, partiu!</button>
                <button onClick={() => redirect("/Explanation")}>Não, pular para a explicação</button>
            </div>
        </section>
    )
}
