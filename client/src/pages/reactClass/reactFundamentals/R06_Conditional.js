import React from 'react'
import { Link } from 'react-router-dom';

import React06_Code01 from '../../../assets/react06_Code01.png'
import React06_Code02 from '../../../assets/react06_Code02.png'
import React06_Code03 from '../../../assets/react06_Code03.png'
import React06_Code04 from '../../../assets/react06_Code04.png'

function R06_Conditional() {

  return (
    <>
        <h2>Conditional Renderings and Short Circuit Evaluations</h2>
        <br></br>

        <h4>1- Conditional Rendering with Multiple Returns: </h4>
        <p>Components, as well as the functions, can have multiple conditional returns.</p>
        <p>Conditional rendering differentiate dynamic pages from static pages.</p>
        <p>If the condition is not met, React will return the default one without the need to use else statement.</p>
        <p>In this example, a loading text is displayed if the information received from the fetched 
            data has not loaded yet.</p>
        <p><Link to={{ pathname: "/react/examples/15"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React06_Code01} alt='Multiple Returns'></img>
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
        <img src={React06_Code04} alt='FALSY and TRUTHY'></img>
        <br></br>
        <p>In this example, "John" is returned as a default value in case the variable text is falsy.
        Also , the variable "isError" is on a toggle state, and the message will only be displayed when 
        "isError" is true.</p>
        <p>The problem with short circuit evaluation is that it displays a value in only one condition. 
            The Ternary Operators can be used to display values in both FALSE and TRUE conditions.</p>
        <p>Ternary operator is an IF ELSE statement with the syntax:</p>
        <p><strong>condition ? (run if true) : (run if false)</strong></p>
        <p><Link to={{ pathname: "/react/examples/16"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React06_Code02} alt='Short Circuit'></img>
        <br></br>
        <br></br>

        <h4>3- Show/Hide: </h4>
        <p>In this example, a short circuit evaluation is used alongside a cleanup function.</p>
        <p>Also, using the empty array argument to execute the useEffect only once won't work this time. 
            Since the component will be toggled, it'll inevitably set multiple event listeners.
        </p>
        <p>This is why it's so important to use cleanup functions.</p>
        <p><Link to={{ pathname: "/react/examples/17"}} target="_blank" rel="noreferrer">Example:</Link></p>
        <img src={React06_Code03} alt='Conditional Events'></img>
        <br></br>
        <br></br>
    </>
  )
}

export default R06_Conditional