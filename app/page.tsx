'use client';

import './styles/style.css';
import {Header} from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProjectOne from './pages/projects/ProjectOne';
import ProjectTwo from './pages/projects/ProjectTwo';
import About from './pages/About';
import Contact from './pages/Contact';
import Exp from './pages/Exp';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App(){
    return (
        <main className = 'whole-thing'>
            <div className= 'space'>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/pages/projects/ProjectOne' element={<ProjectOne/>}/>
                        <Route path='/pages/projects/ProjectTwo' element={<ProjectTwo/>}/>
                        <Route path='/pages/About' element={<About/>}/>
                        <Route path='/pages/Contact' element={<Contact/>}/>
                        <Route path='/pages/Exp' element={<Exp/>}/>
                        <Route element={<NotFound/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        </main>
    );
}