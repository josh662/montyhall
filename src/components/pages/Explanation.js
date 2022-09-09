import {Switch, Route, Router, Routes, Link, BrowserRouter} from 'react-router-dom'
import React from 'react';
import "./Explanation.css"

export default function Explanation () {
    return (
        <section>
            <div className="text">
                <h1 className="text_title">O <span className="text_emphasis">problema</span> de Monty Hall</h1>
                <p className="text_content">O problema de Monty Hall, também conhecido como O paradoxo de Monty Hall é um desafio estatístico que busca determinar a melhor estratégia para vencer o jogo das 3 portas. Ele surgiu a partir de um concurso televisivo dos Estados Unidos chamado <em>Let's Make a Deal</em>, exibido na década de 1970, e funcionava da seguinte forma:</p>
            </div>
        </section>
    )
}