import React from 'react'
import { useParams } from 'react-router-dom';
import './reactclass.css'

import ReactBasics from './reactFundamentals/R02_Basics';
import JSX from './reactFundamentals/R03_JSX';
import State from './reactFundamentals/R04_State';
import Effect from './reactFundamentals/R05_Effect';
import Conditional from './reactFundamentals/R06_Conditional';
import Inputs from './reactFundamentals/R07_Inputs';
import Reference from './reactFundamentals/R08_Reference';

const ReactClass = () => {
  return (
    <>
      <section id='reactLesson'>
        {useParams().id==='2' && <ReactBasics />}
        {useParams().id==='3' && <JSX />}
        {useParams().id==='4' && <State />}
        {useParams().id==='5' && <Effect />}
        {useParams().id==='6' && <Conditional />}
        {useParams().id==='7' && <Inputs />}
        {useParams().id==='8' && <Reference />}
      </section>
    </>
  )
}

export default ReactClass