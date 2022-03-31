import React from 'react'

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
    <div className='container'>
        <div className='row'>
            <h2>Math and Date Objects: </h2>
            <div className='col-sm-10'>
                <p>1- Math Object: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j07_Code01.png' alt='Math'></img>
                <h6>Result: </h6>
                <strong>{mathExample()}</strong>
                <br></br>
                <br></br>

                <p>2- Date Object: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j07_Code02.png' alt='Date'></img>
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

export default J07_Math