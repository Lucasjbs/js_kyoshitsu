import React from 'react'

function R02_Basics() {


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-10'>
                <h2>React Basic Rules, Conversions and Styles</h2>
                <br></br>

                <h4>1- Folder Structure: </h4>
                <p>Node Modules is where all of the dependencies are located.</p>
                <p>Package JSON is like a manifest file, it stores essential settings and 
                    data to start the React application. Dependencies names and versions ar also 
                    stored in this file.
                </p>
                <p>The public folder contains the index.html file that will be displayed for the 
                    website, as well as other images and logos.
                </p>
                <p>You can use the command "npm run build" to create a build folder for static assets.</p>
                <p>The Source folder is where most of the work will be done. The Index.js is the 
                    starting point of the React application.
                </p>
                <p>Gitignore contains the list of files and folders that will be ignored by Git, 
                    GitHub or any other Version Control.
                </p>
                <br></br>

                <h4>2- The Most Basic Component: </h4>
                <p>The most basic method that can be used to display a "Hello World" on screen using React 
                    will require:</p>
                <p>Import React and React DOM.</p>
                <p>Create a component (function with capital letter) that returns a Hello World in HTML (JSX).</p>
                <p>Render the React DOM with the component and the root.</p>
                <p>Example: </p>
                <img src='http://localhost:3000/img/react02_Code01.png' alt='Basic Component'></img>
                <br></br>
                <br></br>

                <h4>3- JSX Conversion: </h4>
                <p>React components require the user to return HTML elements with JSX. Under the hood, it'll 
                    automatically create elements using Javascript.</p>
                <p>JSX is used to facilitate the creation of HTML elements.</p>
                <p><a href='http://localhost:3000/react2ex1' target="_blank" rel="noreferrer">Example:</a></p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Conversion'></img>
                <br></br>
                <br></br>

                <h4>4- JSX Rules: </h4>
                <p>Because of this conversion, JSX have some specific rules that are not present in HTML.</p>
                <p>Firstly, you always have to return a single element. In other words, there can be only 
                    one father element.</p>
                <img src='http://localhost:3000/img/react02_Code03.png' alt='Father Element'></img>
                <p>Be careful with the number of "Divs" you put in your code as it can get confusing. It's a good 
                    practice to use Section and Article tags instead, if possible. Also, you can use "React.Fragment" 
                    as a parent element instead of using a Div.
                </p>
                <p>Use "camelCase" for html attributes.</p>
                <p>Use "className" instead of "class".</p>
                <p>You must close every element, even if it wasn't necessary in HTML.</p>
                <br></br>

                <h4>5 - JSX Styles</h4>
                <p>JSX styles have priority over imported css styles.</p>
                <p>The syntax to write JSX Styles is as follows:</p>

                <p style={{color: '#61dafb', fontSize: '2.75rem'}}>JSX Styled Paragraph.</p>

                <img src='http://localhost:3000/img/react02_Code04.png' alt='JSX Styles'></img>
                <br></br>
                <br></br>
                <br></br>

            </div>
        </div>
    </div>
  )
}

export default R02_Basics