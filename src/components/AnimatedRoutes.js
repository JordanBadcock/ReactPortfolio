import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;