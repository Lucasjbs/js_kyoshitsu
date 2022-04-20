import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import InfoA from './tipsnhints/JInfo01';

import ReactBasics from './react_class/R02_Basics';
import ReactBasicsEx1 from './react_class/R02_example1';
import JSX from './react_class/R03_JSX';
import JSXEx1 from './react_class/R03_example1';
import JSXEx2 from './react_class/R03_example2';
import JSXEx3 from './react_class/R03_example3';
import JSXEx4 from './react_class/R03_example4';
import JSXEx5 from './react_class/R03_example5';
import Hooks from './react_class/R04_State';
import HooksEx1 from './react_class/R04_example1';
import HooksEx2 from './react_class/R04_example2';
import HooksEx3 from './react_class/R04_example3';
import HooksEx4 from './react_class/R04_example4';
import HooksEx5 from './react_class/R04_example5';
import Effect from './react_class/R05_Effect';
import EffectEx1 from './react_class/R05_example1';
import EffectEx2 from './react_class/R05_example2';
import EffectEx3 from './react_class/R05_example3';
import Conditional from './react_class/R06_Conditional';
import ConditionalEx1 from './react_class/R06_example1';
import ConditionalEx2 from './react_class/R06_example2';
import ConditionalEx3 from './react_class/R06_example3';
import Inputs from './react_class/R07_Inputs';
import InputsEx1 from './react_class/R07_example1';
import InputsEx2 from './react_class/R07_example2';

import Home from './pages/home/Home';
import JavascriptClass from './pages/javascriptClass/JavascriptClass'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/javascript/fundamental/:id' element={<JavascriptClass />} />

          <Route path='/react2' element={<ReactBasics/>} />
          <Route path='/react3' element={<JSX/>} />
          <Route path='/react4' element={<Hooks/>} />
          <Route path='/react5' element={<Effect/>} />
          <Route path='/react6' element={<Conditional/>} />
          <Route path='/react7' element={<Inputs/>} />
          <Route path='/react2ex1' element={<ReactBasicsEx1/>} />
          <Route path='/react3ex1' element={<JSXEx1/>} />
          <Route path='/react3ex2' element={<JSXEx2/>} />
          <Route path='/react3ex3' element={<JSXEx3/>} />
          <Route path='/react3ex4' element={<JSXEx4/>} />
          <Route path='/react3ex5' element={<JSXEx5/>} />
          <Route path='/react4ex1' element={<HooksEx1/>} />
          <Route path='/react4ex2' element={<HooksEx2/>} />
          <Route path='/react4ex3' element={<HooksEx3/>} />
          <Route path='/react4ex4' element={<HooksEx4/>} />
          <Route path='/react4ex5' element={<HooksEx5/>} />
          <Route path='/react5ex1' element={<EffectEx1/>} />
          <Route path='/react5ex2' element={<EffectEx2/>} />
          <Route path='/react5ex3' element={<EffectEx3/>} />
          <Route path='/react6ex1' element={<ConditionalEx1/>} />
          <Route path='/react6ex2' element={<ConditionalEx2/>} />
          <Route path='/react6ex3' element={<ConditionalEx3/>} />
          <Route path='/react7ex1' element={<InputsEx1/>} />
          <Route path='/react7ex2' element={<InputsEx2/>} />
          
          <Route path='/jsinfo1' element={<InfoA/>} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
