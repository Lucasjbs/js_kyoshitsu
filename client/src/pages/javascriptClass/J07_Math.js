import React from 'react'

import J07_Code01 from '../../assets/j07_Code01.png'
import J07_Code02 from '../../assets/j07_Code02.png'

function J07_Math() {

    function mathExample(){
      console.log("******Section 01******")
      
      console.log("Math Operators: Floor and Ceil");
      console.log(Math.ceil(5.55));
      console.log(Math.floor(5.55));
      
      console.log("Math Operators: Square, Max and Min");
      console.log(Math.sqrt(25));
      console.log(Math.max(25, 5, 7, 12, 16, 64, 28));
      console.log(Math.min(25, 5, 7, 12, 16, 64, 28));
      
      console.log("Math Operators: Random");
      console.log("Random in JS chooses a decimal number between 0 and 1");
      console.log(Math.random());
      console.log("This can be worked around: ");
      console.log(Math.floor(Math.random() * 10));
  
        return "Console Log Section 01"
      }

      function dateExample(){
        console.log("******Section 02******")

        const monthList = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
        const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
        const date = new Date();
        const month = date.getMonth();
        const day = date.getDay();
        
        console.log(date);
        console.log(monthList[month]);
        console.log(dayList[day-1]);
        
        console.log(date.getFullYear());
        
        const dateTwo = new Date("01/12/2004");
        console.log("The date can be set: ");
        console.log(dateTwo);

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

export default J07_Math