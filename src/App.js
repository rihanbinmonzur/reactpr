import * as React from 'react';
import {Route, Routes } from 'react-router';
import About from './pages/about';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Recipe from './pages/Recipe';
import './assets/css/normalize.css';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/fontawesome-all.min.css';
import './assets/fonts/flaticon.css';

import './assets/style.css';

function App() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/shop" element={<Shop/>} />
        </Routes>

    );
}

export default App;