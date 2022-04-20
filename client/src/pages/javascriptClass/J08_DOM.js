import React from 'react'

function J08_DOM() {

    function mathExample(){
      console.log("******Section 01******")

  
        return "Console Log Section 01"
      }

      function dateExample(){
        console.log("******Section 02******")

        return "Console Log Section 02"
      }

  return (
    <div className='container'>
        <div className='row'>
            <h2>Math and Date Objects: </h2>
            <div className='col-sm-10'>
                <p>1- Math Object: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j04_Code01.png' alt='Math'></img>
                <h6>Result: </h6>
                <strong>{mathExample()}</strong>
                <br></br>
                <br></br>

                <p>2- Date Object: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j04_Code02.png' alt='Date'></img>
                <h6>Result: </h6>
                <strong>{dateExample()}</strong>
                <br></br>
                <br></br>

                <a href='http://localhost:3000/'>Return to home page</a>
            </div>
        </div>
    </div>
  )
}

export default J08_DOM