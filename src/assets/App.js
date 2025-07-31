import * as React from 'react';
import {Route, Routes } from 'react-router';
import About from './pages/about';
import Home from './pages/Home';
import Shop from './pages/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

function App() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/shop" element={<Shop/>} />
        </Routes>

    );
}

export default App;