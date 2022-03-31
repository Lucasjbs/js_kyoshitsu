import React from 'react'

function R02_Basics() {


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-10'>
                <h2>React Basics</h2>

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
                <p>An example of this conversion can be seen <a href='http://localhost:3000/react2ex1' target="_blank" rel="noreferrer">here</a>.</p>
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

                <h4>Styles?</h4>




                <h4>1- JSX Javascript and Props: </h4>
                <p>You can replace text with some kind of variable in JSX by using curly braces on 
                    the text element to be returned with the variable name. The variable must be created 
                    outside the return, but it can be inside or outside the function depending of the situation.
                </p>
                <p>One rule about setting up Javascript in JSX, is that it must be an expression, it cannot be a 
                    statement. In other words, it must return a value.
                </p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <p>Props can be used as an argument for the function component. It always returns an 
                    object with the values sent to the component inside. If no values are sent to it, 
                    then Props will be an empty object.
                </p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
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
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

                <h4>3- Properties Tips and Array of Objects: </h4>
                <p>This example makes use of an array of objects to display all the data received automatically.</p>
                <p>When mapping the properties, we can send the whole object of properties to the subcomponent 
                    and destructure both the properties and the data all at once there.
                </p>
                <p>When working with an array of objects, React will warn you to use an unique key prop to each object.</p>
                <p>Its up to the programmer to set up this key.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
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
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <p>Note that in all event handlers it's possible to access the event object.</p>

                <h4>5- Import and Export Statements: </h4>
                <p>You can only import a component or function that has already been exported.</p>
                <p>There can only be one "export default" component/function. When imported like this, 
                    it's possible to change its name.
                </p>
                <p>All other component/functions must must be a "named export". When imported like this, 
                    you must use curly braces AND put in the same name.
                </p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>




                <h4>1- Use State - Why use it: </h4>
                <p>Use State and Use Effect are the two most know React Hooks.</p>
                <p>Use State is used to re-render the component so when the value on the variable change, 
                    the returned JSX text can also change, and also, preserve this value during execution.</p>
                <p>The first example shows that without the "Use State", the value on the website does not change.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <p>Use State is basically a function provided by React.</p>
                <p>Use State returns an array were the first value is the default state value being used 
                    and the second value is a function that controls the default state value.
                </p>
                <p>The semantic used in Use State is an array destructuring.</p>
                <p>In the second example the value is switched every time the user clicks the button.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
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
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <p>The fourth example is used to display all the object properties and edit them.</p>
                <p>The spread operator was used to edit certain properties while maintain the others.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
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
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>




                <h4>1- Use Effect Basics and Second Parameter: </h4>
                <p>Use Effect runs after every re-render by default.</p>
                <p>Most of the time, Use Effect will be used alongside Use States.</p>
                <p>In this example, the page's title is changed every time a new message arrives.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <p>Use Effect is used to set up side effects, which means some work outside of the component.</p>
                <p>Like data fetch, event listeners, signing up for subscriptions etc.</p>
                <p>Use Effect has a second parameter. By default, when this argument is empty, Use Effect 
                    will run every page render.</p>
                <p>If an empty array is sent as a second argument, Use Effect will only run in the initial render.</p>
                <p>If you want Use Effect to run every time a specific variable is updated, just send the 
                    variable as an array as the second argument.</p>
                <p>Nothing stops you from using more than one Use Effect per component.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

                <h4>2- Use Effect Cleanup Function: </h4>
                <p>In this example, the webpage is constantly monitoring the window width and displaying it.</p>
                <p>The problem in this example is that every time the event listener is updated, 
                    it'll add a new event on the browser until it eventually overflows.</p>
                <p>Use Effect can have a return function that will be executed at the end of the re-render. 
                    It is the most safe way to cleanup something that was executed on the re-render.</p>
                <p>Cleanup functions is important for conditional rendering, but the event listener overflow 
                    can also be fixed by executing the Use Effect  only in the initial render.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

                <h4>3- Use Effect with Async Await: </h4>
                <p>In this example, async await is used to get the array of objects.</p>
                <p>In this case, async await must be used on a separated function 
                    because Use Effect itself cannot return a promise.</p>
                <p>You must send an empty array as an argument to Use Effect so it 
                    doesn't get stuck in an infinite re-render loop.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>




                <h4>1- Conditional Rendering with Multiple Returns: </h4>
                <p>Components, as well as the functions, can have multiple conditional returns.</p>
                <p>Conditional rendering differentiate dynamic pages from static pages.</p>
                <p>If the condition is not met, React will return the default one without the need to use else statement.</p>
                <p>In this example, a loading text is displayed if the information received from the fetched 
                    data has not loaded yet.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>
                <p>One thing to note about fetch data is that in cases the website responds with a 404, 
                    it does not trigger a catch error.</p>
                <p>In order to prevent this error, we need to manually add some functionality set another response.</p>
                <br></br>

                <h4>2- Short Circuit: </h4>
                <p>Since JSX can only return values, IF statements cannot be used.</p>
                <p>One way to work around it thought is by using short circuit evaluation. In this case, 
                    the '&&' and '||' operators are used instead</p>
                <p>When "||" is used, the second value is displayed if the first one is FALSY.</p>
                <p>When "&&" is used, the second value is displayed if the first one is TRUTHY.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <p>In this example, "John" is returned as a default value in case the variable text is falsy.
                Also , the variable "isError" is on a toggle state, and the message will only be displayed when 
                "isError" is true.</p>
                <p>The problem with short circuit evaluation is that it displays a value in only one condition. 
                    The Ternary Operators can be used to display values in both FALSE and TRUE conditions.</p>
                <p>Ternary operator is an IF ELSE statement with the syntax:</p>
                <p><strong>condition ? (run if true) : (run if false)</strong></p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

                <h4>3- Show/Hide: </h4>
                <p>In this example, a short circuit evaluation is used alongside a cleanup function.</p>
                <p>Also, using the empty array argument to execute the useEffect only once won't work this time. 
                    Since the component will be toggled, it'll inevitably set multiple event listeners.
                </p>
                <p>This is why it's so important to use cleanup functions.</p>
                <img src='http://localhost:3000/img/react02_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>




                <h4>1- Forms and Controled Inputs: </h4>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <br></br>

                <h4>2- Forms and Multiple Inputs: </h4>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <br></br>

                <h4>1- aaaaaaaaa: </h4>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <br></br>




                <h4>1- aaaaaaaaa: </h4>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <br></br>

                <h4>1- aaaaaaaaa: </h4>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <br></br>

                <h4>1- aaaaaaaaa: </h4>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <br></br>

                <h4>1- aaaaaaaaa: </h4>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <br></br>

            </div>
        </div>
    </div>
  )
}

export default R02_Basics