import React from 'react'

function J01_Start() {
  return (
    <div className='container'>
      <div className='row'>
        <h2>Step by step to initialize a React project</h2>
          <div className='col-sm-10'>
            <p>1- Install <a href='https://nodejs.org/en/download/' target="_blank" rel="noreferrer">Node JS</a> in your machine.</p>
            <p>2- Create a folder with the name of the project:</p>

            <img src='http://localhost:3000/img/createFolder.png' alt='Folder'></img>
            
            <p>3- Have <a href='https://code.visualstudio.com/' target="_blank" rel="noreferrer">VSCode</a> installed in your machine.</p>
            <p>4- Execute the command "npx create-react-app client" inside the project folder.</p>
            <p>5- Delete all files inside the folder "src" except for "app.js" and "index.js".</p>

            <p>6- Install Bootstrap by copying the <a href='https://getbootstrap.com/docs/4.3/getting-started/introduction/#css' target="_blank" rel="noreferrer">Content Delivery Network </a> 
            links from their website and pasting on the "index.html" file, located on the public folder:</p>

            <img src='http://localhost:3000/img/bootstrapCDN.png' alt='Bootstrap CDN'></img>

            <p>7- Execute the command "npm install react-router-dom"</p>
            <p>8- Import "BrowserRouter as Router, Route, Routes" from 'react-router-dom' </p>
            <p>9- Use Router, then Routes and then write each Route individually like Route path='/lesson1' element= XXX </p>

            <br></br>
            <a href='http://localhost:3000/'>Return to home page</a>
          </div>
      </div>
    </div>
  )
}

export default J01_Start