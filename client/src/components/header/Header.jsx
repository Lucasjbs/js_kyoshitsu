import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header id='homeHeader'>
      <h1>Learn Web Development Fundamentals with the Javascript Classroom</h1>
      <h4>JS Kyoshitsu is an application focused on recording important web programming concepts using Javascript.</h4>

      <div className='content-list'>
        <label htmlFor='content-check'>contents</label>
        <input id='content-check' type='checkbox' role='button'></input>
        <ul>
          <li>
            <a href='#jsCatalog'><span>1. Javascript Class</span></a>
          </li>
          <li>
            <a href='#reactCatalog'><span>2. React Class</span></a>
          </li>
          <li>
            <a href='#cssCatalog'><span>3. CSS Class</span></a>
          </li>
          <li>
            <a href='#tipsCatalog'><span>4. Tips and Hints</span></a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header