import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import Switch, {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Exp from './pages/Exp';

export default function App(){
  return (
    <main>
      <Router>
        <Header/>
        <Routes>
          <Route path='/pages/Home' element={<Home/>}/>
          <Route path='/pages/About' element={<About/>}/>
          <Route path='/pages/Contact' element={<Contact/>}/>
          <Route path='/pages/Exp' element={<Exp/>}/>
        </Routes>
      </Router>
    </main>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
