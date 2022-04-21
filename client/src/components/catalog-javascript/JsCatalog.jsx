import React from 'react'
import { Link } from 'react-router-dom';

const JsCatalog = () => {

  return (
    <section id='jsCatalog'>
      <h2>Javascript Classes:</h2>

      <p><Link to={{ pathname: "/javascript/fundamental/1"}}>1- Starting a Basic ReactJS Project</Link></p>
      <p><Link to={{ pathname: "/javascript/fundamental/2"}}>2- Javascript basics</Link></p>
      <p><Link to={{ pathname: "/javascript/fundamental/3"}}>3- Arrays, Functions and Conditions</Link></p>
      <p><Link to={{ pathname: "/javascript/fundamental/4"}}>4- Loops and Properties</Link></p>
      <p><Link to={{ pathname: "/javascript/fundamental/5"}}>5- References, Null, Truthy and Ternary Operator</Link></p>
      <p><Link to={{ pathname: "/javascript/fundamental/6"}}>6- Scope, Callbacks and Array Iterators</Link></p>
      <p><Link to={{ pathname: "/javascript/fundamental/7"}}>7- Math and Date</Link></p>

    </section>
  )
}

export default JsCatalog