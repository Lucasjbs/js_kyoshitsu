import React from 'react'
import { Link } from 'react-router-dom';

import React05_Code01 from '../../../assets/react05_Code01.png'
import React05_Code02 from '../../../assets/react05_Code02.png'
import React05_Code03 from '../../../assets/react05_Code03.png'

function R05_Effect() {


  return (
    <>
        <h2>Use Effect With Examples</h2>
        <br></br>

        <h4>1- Use Effect Basics and Second Parameter: </h4>
        <p>Use Effect runs after every re-render by default.</p>
        <p>Most of the time, Use Effect will be used alongside Use States.</p>
        <p>In this example, the page's title is changed every time a new message arrives.</p>
        <p><Link to={{ pathname: "/react/examples/12"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React05_Code01} alt='Basic Use Effect'></img>
        <br></br>
        <p>Use Effect is used to set up side effects, which means some work outside of the component.</p>
        <p>Like data fetch, event listeners, signing up for subscriptions etc.</p>
        <p>Use Effect has a second parameter. By default, when this argument is empty, Use Effect 
            will run every page render.</p>
        <p>If an empty array is sent as a second argument, Use Effect will only run in the initial render.</p>
        <p>If you want Use Effect to run every time a specific variable is updated, just send the 
            variable as an array as the second argument.</p>
        <p>Nothing stops you from using more than one Use Effect per component.</p>
        <br></br>

        <h4>2- Use Effect Cleanup Function: </h4>
        <p>In this example, the webpage is constantly monitoring the window width and displaying it.</p>
        <p>The problem in this example is that every time the event listener is updated, 
            it'll add a new event on the browser until it eventually overflows.</p>
        <p>Use Effect can have a return function that will be executed at the end of the re-render. 
            It is the most safe way to cleanup something that was executed on the re-render.</p>
        <p>Cleanup functions is important for conditional rendering, but the event listener overflow 
            can also be fixed by executing the Use Effect  only in the initial render.</p>
        <p><Link to={{ pathname: "/react/examples/13"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React05_Code02} alt='Cleanup Use Effect'></img>
        <br></br>
        <br></br>

        <h4>3- Use Effect with Async Await: </h4>
        <p>In this example, async await is used to get the array of objects.</p>
        <p>In this case, async await must be used on a separated function 
            because Use Effect itself cannot return a promise.</p>
        <p>You must send an empty array as an argument to Use Effect so it 
            doesn't get stuck in an infinite re-render loop.</p>
        <p><Link to={{ pathname: "/react/examples/14"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React05_Code03} alt='Async Use Effect'></img>
        <br></br>
        <br></br>
    </>
  )
}

export default R05_Effect