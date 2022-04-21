import React from 'react'

function R06_Conditional() {



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-10'>
                <h2>Conditional Renderings and Short Circuit Evaluations</h2>
                <br></br>

                <h4>1- Conditional Rendering with Multiple Returns: </h4>
                <p>Components, as well as the functions, can have multiple conditional returns.</p>
                <p>Conditional rendering differentiate dynamic pages from static pages.</p>
                <p>If the condition is not met, React will return the default one without the need to use else statement.</p>
                <p>In this example, a loading text is displayed if the information received from the fetched 
                    data has not loaded yet.</p>
                <p><a href='http://localhost:3000/react6ex1' target="_blank" rel="noreferrer">Example:</a></p>
                <img src='http://localhost:3000/img/react06_Code01.png' alt='JSX Rules'></img>
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
                <img src='http://localhost:3000/img/react06_Code04.png' alt='JSX Rules'></img>
                <br></br>
                <p>In this example, "John" is returned as a default value in case the variable text is falsy.
                Also , the variable "isError" is on a toggle state, and the message will only be displayed when 
                "isError" is true.</p>
                <p>The problem with short circuit evaluation is that it displays a value in only one condition. 
                    The Ternary Operators can be used to display values in both FALSE and TRUE conditions.</p>
                <p>Ternary operator is an IF ELSE statement with the syntax:</p>
                <p><strong>condition ? (run if true) : (run if false)</strong></p>
                <p><a href='http://localhost:3000/react6ex2' target="_blank" rel="noreferrer">Example:</a></p>
                <img src='http://localhost:3000/img/react06_Code02.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

                <h4>3- Show/Hide: </h4>
                <p>In this example, a short circuit evaluation is used alongside a cleanup function.</p>
                <p>Also, using the empty array argument to execute the useEffect only once won't work this time. 
                    Since the component will be toggled, it'll inevitably set multiple event listeners.
                </p>
                <p>This is why it's so important to use cleanup functions.</p>
                <p><a href='http://localhost:3000/react6ex3' target="_blank" rel="noreferrer">Example:</a></p>
                <img src='http://localhost:3000/img/react06_Code03.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

            </div>
        </div>
    </div>
  )
}

export default R06_Conditional