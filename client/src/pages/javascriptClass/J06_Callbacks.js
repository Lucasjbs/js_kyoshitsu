import React from 'react'

import J06_Code01 from '../../assets/j06_Code01.png'
import J06_Code02 from '../../assets/j06_Code02.png'
import J06_Code03 from '../../assets/j06_Code03.png'
import J06_Code04 from '../../assets/j06_Code04.png'
import J06_Code05 from '../../assets/j06_Code05.png'

function J06_Callbacks() {

    function localGlobalScope(){
      console.log("******Section 01******")

      let name = "Matthew";
      let age = 22;
      
      function block_one(){
          let name = "Josh";
          console.log("The name displayed will be the one in the Local Scope: ");
          console.log(name);
          function block_two(){
              let name = "Paul";
              console.log("JavaScript search the variable from inside the Local Scope to the outside: ");
              console.log(name);
          }
          function block_three(){
              console.log(name);
              console.log(age);
          }
          block_two();
          block_three();
      
          //globalName = "George";
      
      }
      
      block_one();
      //console.log("Without 'let' or 'const', the variable is global: ");
      //console.log(globalName);
      
      {
          let age = 26;
          console.log("Code blocks works with only Brackets closing it in ");
          console.log(age);
      }
      
      console.log(age);
  
        return "Console Log Section 01"
      }

      function callbackExample(){
        console.log("******Section 02******")

      function callBackFunction(){
          return("Call Back Function: Passed as an argument to another function");
      }
      function callBackFunctionTwo(){
          return("You can sent multiple CallBacks in the High Order Function");
      }
      
      function highOrderFunction(text1, cbf){
          console.log(text1);
          console.log(cbf());
      }
      
      const strHoF = "High Order Function: Accepts another function as an argument, or returns another function as a result";
      highOrderFunction(strHoF, callBackFunction);
      highOrderFunction("Second Instance", callBackFunctionTwo);

        return "Console Log Section 02"
      }

      function forEachEx(){
        console.log("******Section 03******")

        console.log("Array Iterators accepts callback functions as arguments, then calls them for each item in the array.");
        console.log("The item is referenced in the callback parameter.");
        
        console.log("For Each Iterator:");
        
        const testhObject = [
            {name: "Object Number One", id: 1, isIdEven: false, dummyNumber: 10},
            {name: "Object Number Two", id: 2, isIdEven: true, dummyNumber: 20},
            {name: "Object Number Three", id: 3, isIdEven: false, dummyNumber: 30},
            {name: "Object Number Four", id: 4, isIdEven: true, dummyNumber: 40}
        ];
        
        function displayForEachObj(data){
            console.log(data);
            console.log(typeof data);
            console.log(data.id);
            console.log(typeof data.id);
        }

        testhObject.forEach(displayForEachObj);

        return "Console Log Section 03"
      }

      function mapEx(){
        console.log("******Section 04******")
        
        const testhObject = [
            {name: "Object Number One", id: 1, isIdEven: false, dummyNumber: 10},
            {name: "Object Number Two", id: 2, isIdEven: true, dummyNumber: 20},
            {name: "Object Number Three", id: 3, isIdEven: false, dummyNumber: 30},
            {name: "Object Number Four", id: 4, isIdEven: true, dummyNumber: 40}
        ];

        console.log("Map Iterator: For Each can't return anything, but Map can!");

        const mapVar = testhObject.map( function (data) {
            return data;
        });
        const mapNumber = testhObject.map( function (data) {
            return data.dummyNumber / 2;
        });
        
        console.log(mapVar);
        console.log("Map Iterator will always return an array of the same size of the parameter, the value returned can change.");
        console.log(mapNumber);

        return "Console Log Section 04"
      }

      function otherIterators(){
        console.log("******Section 05******")
        
        const testhObject = [
            {name: "Object Number One", id: 1, isIdEven: false, dummyNumber: 10},
            {name: "Object Number Two", id: 2, isIdEven: true, dummyNumber: 20},
            {name: "Object Number Three", id: 3, isIdEven: false, dummyNumber: 30},
            {name: "Object Number Four", id: 4, isIdEven: true, dummyNumber: 40}
        ];

        //Array Iterators: Filter

        console.log("Filter Iterator: Return a new array based on conditions!");

        const filterVar = testhObject.filter( function (data) {
            return data.id < 3;
        });
        
        console.log(filterVar);
        
        //Array Iterators: Find
        
        console.log("Find Iterator: Returns the first find as a single instance!");
        
        const findVar = testhObject.find( function (data) {
            return data.isIdEven == true;
        });
        
        console.log(findVar);
        
        //Array Iterators: Reduce
        
        console.log("Reduce Iterator: Use 2 parameters: 'acc' and 'curr'");
        
        const reduceVar = testhObject.reduce( function (acc, curr) {
            console.log(`Number on the accumulator: ${acc}`);
            console.log(`Number on the current object: ${curr.dummyNumber}`);
        
            acc += curr.dummyNumber;
            return acc;
        }, 0);
        
        console.log(`Reduce iterator final result: ${reduceVar}`);
        // The whole functionality depends on the return of the Iterator
        // The ZERO argument is the initial value of the accumulator, it can be a string, boolean, etc...

        return "Console Log Section 05"
      }

  return (
    <>
        <h2>Scope, Callbacks and Array Iterators: </h2>
        <p>1- Variable Lockup in a Global/Local Scope: </p>
        <h4>Code: </h4>
        <img src={J06_Code01} alt='Scope'></img>
        <h4>Result: {localGlobalScope()}</h4>
        <br></br>

        <p>2- Callback Function: </p>
        <h4>Code: </h4>
        <img src={J06_Code02} alt='Callback'></img>
        <h4>Result: {callbackExample()}</h4>
        <br></br>

        <p>3- Array Iterators - For Each: </p>
        <h4>Code: </h4>
        <img src={J06_Code03} alt='For Each'></img>
        <h4>Result: {forEachEx()}</h4>
        <br></br>

        <p>4- Array Iterators - Map: </p>
        <h4>Code: </h4>
        <img src={J06_Code04} alt='Map'></img>
        <h4>Result: {mapEx()}</h4>
        <br></br>

        <p>5- Array Iterators - Filter, Find and Reduce: </p>
        <h4>Code: </h4>
        <img src={J06_Code05} alt='Iterators'></img>
        <h4>Result: {otherIterators()}</h4>
        <br></br>
    </>
  )
}

export default J06_Callbacks