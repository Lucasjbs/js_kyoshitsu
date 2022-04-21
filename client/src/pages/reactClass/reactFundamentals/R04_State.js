import React from 'react'
import { Link } from 'react-router-dom';

import React04_Code01 from '../../../assets/react04_Code01.png'
import React04_Code02 from '../../../assets/react04_Code02.png'
import React04_Code03 from '../../../assets/react04_Code03.png'
import React04_Code04 from '../../../assets/react04_Code04.png'
import React04_Code05 from '../../../assets/react04_Code05.png'

function R04_State() {

  return (
    <>
        <h2>React Hooks Rules and Use State With Examples </h2>
        <br></br>

        <h4>1- Use State - Why use it: </h4>
        <p>Use State and Use Effect are the two most know React Hooks.</p>
        <p>Use State is used to re-render the component so when the value on the variable change, 
            the returned JSX text can also change, and also, preserve this value during execution.</p>
        <p>The first example shows that without the "Use State", the value on the website does not change.</p>
        <p><Link to={{ pathname: "/react/examples/7"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React04_Code01} alt='Error Example'></img>
        <br></br>
        <br></br>
        <p>Use State is basically a function provided by React.</p>
        <p>Use State returns an array were the first value is the default state value being used 
            and the second value is a function that controls the default state value.
        </p>
        <p>The semantic used in Use State is an array destructuring.</p>
        <p>In the second example the value is switched every time the user clicks the button.</p>
        <p><Link to={{ pathname: "/react/examples/8"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React04_Code02} alt='Basic Use State'></img>
        <br></br>
        <br></br>

        <h4>2- React Hooks Basic Rules: </h4>
        <p>Other rules about React Hooks are: They'll all start with Use.</p>
        <p>React Hooks can only be used in a component body, in other words, functions that starts with uppercase.</p>
        <p>Hooks cannot be declared inside a conditional statement.</p>
        <br></br>

        <h4>3- Use State With Arrays and Objects: </h4>
        <p>In the third example, the Array Iterator: Map is used to display all 
            the object properties inside the array.</p>
        <p>Also, Use State is called directly through React, instead of being imported.</p>
        <p><Link to={{ pathname: "/react/examples/9"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React04_Code03} alt='Array Use State'></img>
        <br></br>
        <p>The fourth example is used to display all the object properties and edit them.</p>
        <p>The spread operator was used to edit certain properties while maintain the others.</p>
        <p><Link to={{ pathname: "/react/examples/10"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React04_Code04} alt='Object Use State'></img>
        <br></br>
        <p>There is no rule preventing the programmer to turn all those object values into 
            separated state values.</p>
        <br></br>

        <h4>4- Use State With a Counter: </h4>
        <p>In the last example, Use State is used to set up a functional update form with numbers.</p>
        <p>In the complex counter, the timeout function is set to start after 2 seconds.</p>
        <p>If "setValue" was executed directly inside "setTimeout", it would only compute one 
            click each 2 seconds.</p>
        <p>To actually use the functional approach, instead of passing the value directly, we pass 
            a function that'll get the CURRENT state value and update it.</p>
        <p><Link to={{ pathname: "/react/examples/11"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React04_Code05} alt='Counter Use State'></img>
        <br></br>
        <br></br>
    </>
  )
}

export default R04_State