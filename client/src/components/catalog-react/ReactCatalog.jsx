import React from 'react'
import { Link } from 'react-router-dom';

const ReactCatalog = () => {
  return (
    <section id='reactCatalog'>
      <h2>ReactJS Classes:</h2>

      <p><Link to={{ pathname: "/javascript/fundamental/1"}}>1- Starting a Basic ReactJS Project</Link></p>
      <p><Link to={{ pathname: "/react/fundamental/2"}}>2- React Basics</Link></p>
      <p><Link to={{ pathname: "/react/fundamental/3"}}>3- JSX Properties</Link></p>
      <p><Link to={{ pathname: "/react/fundamental/4"}}>4- React Hooks: Use State</Link></p>
      <p><Link to={{ pathname: "/react/fundamental/5"}}>5- React Hooks: Use Effect</Link></p>
      <p><Link to={{ pathname: "/react/fundamental/6"}}>6- Conditional Rendering</Link></p>
      <p><Link to={{ pathname: "/react/fundamental/7"}}>7- Forms and Inputs</Link></p>

    </section>
  )
}

export default ReactCatalog