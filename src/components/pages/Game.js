import {Switch, Route, Router, Routes, Link, BrowserRouter} from 'react-router-dom'
import React, { useState } from 'react';
import "./Game.css"
import doorImg from "../images/door.png"



export default function Game () {

    const [first, setFirst] = useState(true)
    const [finish, setfinish] = useState(false)
    const [dr, setdr] = useState(0)
    const [res, setres] = useState("")

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const next = function(door) {
        setdr(door)
        setFirst(false)
    }

    const end = function(e, v, c) {
        let msg = "Você errou :("
        if(e == v) {
            msg = "Parabens! Você acertou \u{1f680}\u{1f389}"
        }

        let con = "Errando ou acertando, "
        if(c) {
            con += "você tomou a decisão certa em trocar de porta!"
        } else {
            con += "a melhor estratégia seria ter trocado de porta"
        }
        setres([msg, con])
        setfinish(true)

    }

    function redirect(path) {
        window.open(path, "_self")
    }

    const Step1 = () => {
        return (
            <>
                <p className="question__text">Você está participando de um programa de televisão, e o apresentador te mostra 3 portas idênticas numeradas de 1 à 3 e diz que você poderá levar o que tiver atrás da porta que escolher.</p>
                <p className="question__text">A questão é que em duas delas você encontrará uma cabra e na restante um carro novo e 300 mil dólares em dinheiro.</p>
                <p className="question__ask">Então para começar... Qual das 3 portas você escolhe?</p>
                <div className="doors">
                    <button className="doors__door" onClick={() => next(1)}>
                        <img className="doors__img" src={doorImg} alt="Porta 1"/>
                        <p>Porta 1</p>
                    </button>
                    <button className="doors__door" onClick={() => next(2)}>
                        <img className="doors__img" src={doorImg} alt="Porta 2"/>
                        <p>Porta 2</p>
                    </button>
                    <button className="doors__door" onClick={() => next(3)}>
                        <img className="doors__img" src={doorImg} alt="Porta 3"/>
                        <p>Porta 3</p>
                    </button>
                </div>
            </>
        )
    }

    const Step2 = () => {
        let drs = [1, 2, 3]
        let dr_c = getRandomInt(1, 3)

        if(drs.includes(dr_c)) {
            drs.splice(drs.indexOf(dr_c), 1)
        }

        if(drs.includes(dr)) {
            drs.splice(drs.indexOf(dr), 1)
        }
        let dr_e = drs[0]
        let dr_m = dr_c
        if(drs.length > 1) {
            let e = getRandomInt(1, 2)
            dr_m = drs[1]
            if(e == 2) {
                dr_e = drs[1]
                dr_m = drs[0]
            }
        }

        return (
            <>
                <p>Muito bem jogador, você escolheu a porta {dr}.</p>
                <p>Agora vou lhe dar uma dica e também uma escolha...</p>
                <br />
                <p>Lá vem a dica: O prêmio não está atrás da porta {dr_e}.</p>
                <p>Você deseja trocar sua escolha para a porta {dr_m}?</p>
                <div className="change">
                    <button className="change__button" onClick={() => end(dr_m, dr_c, true)}>Sim! Quero trocar.</button>
                    <button className="change__button" onClick={() => end(dr, dr_c, false)}>Não, desejo manter.</button>
                </div>
            </>
        )
    }

    const Step3 = () => {
        return (
            <div className='finish'>
                <p>{res[0]}</p>
                <p>{res[1]}</p>
                <button className="why" onClick={() => redirect("/explanation")}>Veja por que!</button>
            </div>
        )
    }

    return (
        <section className="section">
            <div className="card">
                <h1 className="challenge">{first ? "Muito bem... vamos lá!" : (finish ? "Nos vemos por aí... \u{1f44b}" : "Segunda parte!")}</h1>
                <div className="question">
                    {first ? <Step1 /> : (finish ? <Step3 /> : <Step2 />)}
                </div>
            </div>
        </section>
    )
}