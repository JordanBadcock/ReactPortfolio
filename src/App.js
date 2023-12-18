import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
    // const location = useLocation();
    const [isTransitioning, setTransitioning] = useState(false);

    React.useEffect(() => {
        setTransitioning(true);
        const timeoutId = setTimeout(() => setTransitioning(false), 0.5); // Adjust the duration to match the CSS transition
        return () => clearTimeout(timeoutId);
    }, [/*location.pathname*/]);

    return (
        <Router>
            <div className="App">
                <header>
                    <Navbar />
                </header>
                <main className={isTransitioning ? 'transitioning': ''}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
