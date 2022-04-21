import React from 'react'

import J07_Code01 from '../../assets/j07_Code01.png'
import J07_Code02 from '../../assets/j07_Code02.png'

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
    <>
      <h2>Math and Date Objects: </h2>
      <p>1- Math Object: </p>
      <h4>Code: </h4>
      <img src={J07_Code01} alt='Math'></img>
      <h4>Result: {mathExample()}</h4>
      <br></br>

      <p>2- Date Object: </p>
      <h4>Code: </h4>
      <img src={J07_Code02} alt='Date'></img>
      <h4>Result: {dateExample()}</h4>
      <br></br>
    </>
  )
}

export default J08_DOM