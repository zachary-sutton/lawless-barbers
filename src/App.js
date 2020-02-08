import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import About from "./components/About"
import Parallax from "./components/Parallax"
import Content from "./components/Content"
import TheTeam from "./components/TheTeam"
import OpeningHours from "./components/OpeningHours"
import Connect from "./components/Connect"

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min"


function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <About />
      <Parallax />
      <Content />
      <TheTeam />
      <OpeningHours />
      <Connect />
    </div>
  )
}

export default App;
