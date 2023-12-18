import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <AnimatedRoutes />
            </Router>
        </div>
    );
}

export default App;
