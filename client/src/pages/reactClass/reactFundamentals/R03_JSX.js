import React from 'react'
import { Link } from 'react-router-dom';

import React03_Code01 from '../../../assets/react03_Code01.png'
import React03_Code02 from '../../../assets/react03_Code02.png'
import React03_Code03 from '../../../assets/react03_Code03.png'
import React03_Code04 from '../../../assets/react03_Code04.png'
import React03_Code05 from '../../../assets/react03_Code05.png'
import React03_Code06 from '../../../assets/react03_Code06.png'

function R03_JSX() {
    
  return (
    <>
        <h2>JSX Properties, Event Handlers and Imports</h2>
        <br></br>

        <h4>1- JSX Javascript and Props: </h4>
        <p>You can replace text with some kind of variable in JSX by using curly braces on 
            the text element to be returned with the variable name. The variable must be created 
            outside the return, but it can be inside or outside the function depending of the situation.
        </p>
        <p>One rule about setting up Javascript in JSX, is that it must be an expression, it cannot be a 
            statement. In other words, it must return a value.
        </p>
        <p><Link to={{ pathname: "/react/examples/2"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React03_Code01} alt='JSX Javascript'></img>
        <br></br>
        <br></br>
        <p>Props can be used as an argument for the function component. It always returns an 
            object with the values sent to the component inside. If no values are sent to it, 
            then Props will be an empty object.
        </p>
        <p><Link to={{ pathname: "/react/examples/3"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React03_Code02} alt='JSX Props'></img>
        <br></br>
        <br></br>

        <h4>2- Alternative Properties: </h4>
        <p>An alternative way to access these properties is by destructuring it.</p>
        <p>You can avoid repeating yourself by creating a constant and deconstruct the 
            props values on it, and then, use this constant on the rest of the component.
        </p>
        <p>You can destructure it on a constant or directly into the parameters.</p>
        <p>There is also a special property called <strong>Children</strong>.</p>
        <p>Children Props are placed between the open/close tags.</p>
        <p><Link to={{ pathname: "/react/examples/4"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React03_Code03} alt='JSX Alternative'></img>
        <br></br>
        <br></br>

        <h4>3- Properties Tips and Array of Objects: </h4>
        <p>This example makes use of an array of objects to display all the data received automatically.</p>
        <p>When mapping the properties, we can send the whole object of properties to the subcomponent 
            and destructure both the properties and the data all at once there.
        </p>
        <p>When working with an array of objects, React will warn you to use an unique key prop to each object.</p>
        <p>Its up to the programmer to set up this key.</p>
        <p><Link to={{ pathname: "/react/examples/5"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React03_Code04} alt='JSX Subcomponents'></img>
        <p>Another way to send the object of properties to the subcomponent is by using the spread operator.</p>
        <br></br>

        <h4>4- Event Handler: </h4>
        <p>Event handlers are used to manage some of the user actions on the website 
            interface and execute something accordingly.</p>
        <p>One of the most famous event handlers is the <strong>"onClick"</strong>.</p>
        <p>All the event handlers must be written on camel case in React. 
            In Javascript they're usually written in lowercase.</p>
        <p>There are multiple ways to set up the handler. You can set up as a reference or as an in-line function.</p>
        <p>An example of setting up the handler as a reference is used in the "clickHandler".</p>
        <p>An example of setting up the handler as an in-line function is used in the "console.log(name)".</p>
        <p>An example of a dynamic function that use an argument is displayed in "displayMisc".</p>
        <p>In this case, you must set up the handler as an arrow function to prevent invoking it when 
            using an argument, otherwise, it'll run as soon as the page render, and not on click.</p>
        <p><Link to={{ pathname: "/react/examples/6"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React03_Code05} alt='JSX Events'></img>
        <p>Note that in all event handlers it's possible to access the event object.</p>

        <h4>5- Import and Export Statements: </h4>
        <p>You can only import a component or function that has already been exported.</p>
        <p>There can only be one "export default" component/function. When imported like this, 
            it's possible to change its name.
        </p>
        <p>All other component/functions must must be a "named export". When imported like this, 
            you must use curly braces AND put in the same name.
        </p>
        <img src={React03_Code06} alt='React Imports'></img>
        <br></br>
        <br></br>
    </>
  )
}

export default R03_JSX