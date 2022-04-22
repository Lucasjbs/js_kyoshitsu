import React from 'react'
import { Link } from 'react-router-dom';

const TipsCatalog = () => {
  return (
    <section id='tipsCatalog'>
    <h2>Tips and Hints:</h2>

    <p><Link to={{ pathname: "/tips/info/1"}}>1- Javascript Extras</Link></p>
    <p><Link to={{ pathname: "/tips/info/1"}}>2- Folder Structure</Link></p>
    <p><Link to={{ pathname: "/tips/info/1"}}>3- GitHub Settings</Link></p>

    </section>
  )
}

export default TipsCatalog