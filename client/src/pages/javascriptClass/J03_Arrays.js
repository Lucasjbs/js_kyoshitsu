import React from 'react'

import J03_Code01 from '../../assets/j03_Code01.png'
import J03_Code02 from '../../assets/j03_Code02.png'
import J03_Code03 from '../../assets/j03_Code03.png'
import J03_Code04 from '../../assets/j03_Code04.png'
import J03_Code05 from '../../assets/j03_Code05.png'

function J03_Arrays() {

    function arrayExample(){
        console.log("******Section 01******")

        const friends = ["Gideon", 18, "Samuel", 16, "Jacob", 24, "Ellie", 22, "Dummy", 64];

        console.log("An array of friends with their age: ");
        console.log(friends);
        console.log(typeof friends);
        console.log(friends[0] + " is " + friends[1] + " years old!");
        console.log("Arrays in Javascript can have multiple data types inside!");
        
        console.log("Values inside arrays can be changed:");
        console.log(friends[9]);
        friends[9] = true;
        console.log(friends[9]);
        console.log(friends);
  
        return "Console Log Section 01"
      }

      function functionExample(){
        console.log("******Section 02******")

        function greetings(name){
            console.log("Hello " + name);
        }
        greetings("Peter");
        greetings(18);
        greetings("Josh");
        
        function icm_conversion(value){
            console.log("The value in Inches is: " + value);
            console.log("The value in Centimeters is: " + (value * 2.54));
            return value * 2.54;
        }
        let width = icm_conversion(5);
        console.log("Width is equal to : " + width);
        
        console.log("Function Expressions: ");
        
        //Anonymous Function: 
        const add = function(num1, num2){
            return num1 + num2;
        }
        console.log("The Anonymous Function result is equals to: ");
        console.log(add(3, 7));
        console.log(typeof add);
        
        //Arrow Function (ES6):
        const multiply = (num1, num2) => num1 * num2;
        
        console.log("The Arrow Function result is equals to: ");
        console.log(multiply(3, 5));
        console.log(typeof multiply);

        return "Console Log Section 02"
      }

      function objectExample(){
        console.log("******Section 03******")

        const person = {
            name: "Apollo",
            age: 36,
            married: true,
            siblings: ["Anna", "Suzy", "Peter"],
            greeting: function (){
               console.log("Hello Apollo!");
            }
        }
        // function inside an object can be shortened to: 'greeting(){}' 
        console.log("Objects are accessed using dots: ");
        console.log(person.name);
        console.log(person.siblings[1]);
        person.greeting();
        console.log(typeof person);
        
        console.log(person);
        console.log("Object values can be changed: ");
        person.name = "James";
        console.log(person.name);
        console.log(person);
  
        return "Console Log Section 03"
      }

      function ifConditions(){
        console.log("******Section 04******")

        const value = 2>1;

        if(value){
            console.log("The constant value is a: ");
            console.log(typeof value);
        }
        
        const if_num1 = 8;
        const if_num2 = '8';
        
        // !== AND != are the opposite of === AND == respectively
        
        if(if_num1 === if_num2){
            console.log("Display this, if the value AND the type is EQUAL");
        }
        else if (if_num1 == if_num2){
            console.log("Display this, if the value is EQUAL but the type is DIFFERENT");
        }
        else{
            console.log("Display this, if the value is DIFFERENT");
        }
  
        return "Console Log Section 04"
      }

      function switchConditions(){
        console.log("******Section 05******")

        const swt_num1 = 12;
        const swt_num2 = 10;
        const swt_num3 = '10';
        
        switch(swt_num1 >= swt_num2 || swt_num2 === swt_num3){
            case true:
                console.log("Display this, if ONE of the conditions are TRUE");
                break;
            case false:
                console.log("Display this, if BOTH of the conditions are FALSE");
                break;
            default:
                break;
        }
        
        switch(swt_num1 >= swt_num2 && swt_num2 === swt_num3){
            case true:
                console.log("Display this, if BOTH of the conditions is TRUE");
                break;
            case false:
                console.log("Display this, if ONE of the conditions is FALSE");
                break;
            default:
                break;
        }
  
        return "Console Log Section 05"
      }

  return (
    <>
        <h2>Javascript Arrays, Functions, Conditional Statements and Operators: </h2>
        <p>1- Arrays in Javascript: </p>
        <h4>Code: </h4>
        <img src={J03_Code01} alt='JS Arrays'></img>
        <h4>Result: {arrayExample()}</h4>
        <br></br>

        <p>2- Functions in Javascript: </p>
        <h4>Code: </h4>
        <img src={J03_Code02} alt='JS Functions'></img>
        <h4>Result: {functionExample()}</h4>
        <br></br>

        <p>3- Objects in Javascript: </p>
        <h4>Code: </h4>
        <img src={J03_Code03} alt='JS Objects'></img>
        <h4>Result: {objectExample()}</h4>
        <br></br>

        <p>4- Conditional Statements and Operators: </p>
        <h4>Code: </h4>
        <img src={J03_Code04} alt='JS Conditionals'></img>
        <h4>Result: {ifConditions()}</h4>
        <br></br>

        <p>5- Switch Statements and Operators: </p>
        <h4>Code: </h4>
        <img src={J03_Code05} alt='JS Switch'></img>
        <h4>Result: {switchConditions()}</h4>
        <br></br>
    </>
  )
}

export default J03_Arrays