import React from 'react'

function R07_Inputs() {



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-10'>
                <h2>Forms and Inputs</h2>
                <br></br>

                <h4>1- Forms and Controled Inputs: </h4>
                <p>In Javascript, forms and inputs works around setting up some kind of id to the input, 
                  and then, get the value by target the value property on the node.</p>
                <p>In React however, when dealing with controlled inputs, the input will be hooked with a state value.</p>
                <p>When setting up labels, use "htmlFor" with the ID name of the input that'll be tied to the label.</p>
                <br></br>
                <p>To submit the form values, you can use "onSubmit" on the form tag  and execute the function from 
                  it, or use onClick directly on the button. The button must be of type=submit.</p>
                <p>When submitting the form, you'll have access to the event object, and you might want 
                  to use the prevent default method to avoid problems.</p>
                <p>In this example, both input values are tied up with their State variables through the 
                  "value" and "onChange" tags. As soon as the user types, the State value is changed 
                  through the event, and then, the input text is also changed because it'll always 
                  display what is inside the State value.</p>
                <p>The ID of each user is created using the date and converting it to string.</p>
                <p><a href='http://localhost:3000/react7ex1' target="_blank" rel="noreferrer">Example:</a></p>
                <img src='http://localhost:3000/img/react06_Code03.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

                <h4>2- Forms and Multiple Inputs: </h4>
                <p>The next example is useful for when you have many inputs and you don't want to assign 
                  a State value for each one.</p>
                <p>In this case, there'll be only one function responsible for changing values, and 
                  there'll be only one state value for all of them.</p>
                <p>In this new scenario, the values must be accessed through the State object.</p>
                <p>Now, the "changeHandler" can be used by any variable since it is getting the property name as well 
                  as the value and adding it to the State object.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p>Import React and React DOM.</p>
                <p><a href='http://localhost:3000/react7ex2' target="_blank" rel="noreferrer">Example:</a></p>
                <img src='http://localhost:3000/img/react06_Code03.png' alt='JSX Rules'></img>
                <br></br>
                <br></br>

            </div>
        </div>
    </div>
  )
}

export default R07_Inputs