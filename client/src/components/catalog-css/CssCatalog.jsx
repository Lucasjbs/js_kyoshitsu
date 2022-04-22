import React from 'react'
import { Link } from 'react-router-dom';

const CssCatalog = () => {
  return (
    <section id='cssCatalog'>
      <h2>CSS Class: </h2>
      
      <p><Link to={{ pathname: "/css/fundamental/1"}}>1- Main Stylesheet Settings</Link></p>

    </section>
  )
}

export default CssCatalog