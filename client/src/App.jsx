import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import InfoA from './tipsnhints/JInfo01';

import Home from './pages/home/Home';
import JavascriptClass from './pages/javascriptClass/JavascriptClass'
import ReactClass from './pages/reactClass/ReactClass'
import ReactExamples from './pages/reactClass/ReactExamples'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/javascript/fundamental/:id' element={<JavascriptClass />} />
          <Route path='/react/fundamental/:id' element={<ReactClass />} />
          <Route path='/react/examples/:id' element={<ReactExamples />} />
          
          <Route path='/jsinfo1' element={<InfoA/>} />
          
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
