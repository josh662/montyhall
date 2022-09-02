import {Switch, Route, Router, Routes, Link, BrowserRouter} from 'react-router-dom'
import React from 'react'
import "./App.css"

import Home from './components/pages/Home'
import Game from './components/pages/Game'
import Explanation from './components/pages/Explanation'
import About from './components/pages/About'

function App() {
  return (
    <BrowserRouter>
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/explanation' component={Explanation} />
        <Route exact path='/about' component={About} />
      </Switch>
    </main>
  </BrowserRouter>
  );
}

export default App;
