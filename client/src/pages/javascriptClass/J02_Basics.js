import React from 'react'

import J02_Code01 from '../../assets/j02_Code01.png'
import J02_Code02 from '../../assets/j02_Code02.png'
import J02_Code03 from '../../assets/j02_Code03.png'
import J02_Code04 from '../../assets/j02_Code04.png'
import J02_Code05 from '../../assets/j02_Code05.png'
import J02_Code06 from '../../assets/j02_Code06.png'

function J02_Basics() {

    function docWriteEx() {
      //document.write("Write a sentence directly in the web page!")
      return "It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened."
    }

    const invokeAlertEvent = (e) => {
      e.preventDefault()
      alert("Alert pop up invoked!")
    }
    
    function basicVariableExample(){
      let genericName = "Adam";
      let genericNumber = 36;
      let genericNumberString = "48";
      let genericString = "Ryuka";
      let genericBoolean = true;
      console.log("******Section 01******")
      console.log(genericName)
      console.log(genericNumber)
      console.log(genericNumberString)
      console.log(genericString)
      console.log(genericBoolean)

      return "Console Log Section 01"
    }
    
    function variableDeclare(){
      console.log("******Section 02******")
      var oldVariable = "'var' is an old version of 'let'";
      let newVariable = "'let' is a new version of 'var'";
      const staticVariable = "'const' is an immutable variable"
      
      console.log(oldVariable);
      console.log(newVariable);
      
      oldVariable = "'var' can be changed";
      newVariable = "'let' can be changed";
      
      console.log(oldVariable);
      console.log(newVariable);
      console.log(staticVariable);

      return "Console Log Section 02"
    }

    function numericalOperations(){
      console.log("******Section 04******")
      let genericAdd = 48;
      genericAdd += 16;
      
      let genericSub = 48;
      genericSub -= 16;
      
      let genericMult = 8;
      genericMult *= 6;
      
      let genericDiv = 8;
      genericDiv /= 6;
      console.log("Numbers's Implicit Basic Operations:");
      console.log(genericAdd);
      console.log(genericSub);
      console.log(genericMult);
      console.log(genericDiv);
      
      console.log("Number modulus is equal to the division remainders:");
      
      const genericNumber2 = 10 / 3;
      const divisionModulus1 = 10 % 3;
      const divisionModulus2 = 11 % 3;
      
      console.log(genericNumber2);
      console.log(divisionModulus1);
      console.log(divisionModulus2);
      return "Console Log Section 04"
    }

    function typeConversions(){
      console.log("******Section 05******")
      const strConcat1 = "I'm Josh, and I am ";
      const numberConcat = 36;
      const strConcat2 = " years old.";
      
      console.log(strConcat1 + numberConcat + strConcat2);
      
      let genericNumber3 = '48';
      let genericNumber4 = '16';
      
      console.log("If the string is a number only, the JS converts it automatically:");
      console.log(genericNumber3 - genericNumber4);
      console.log("Doesn't work with addition though:");
      console.log(genericNumber3 + genericNumber4);
      
      console.log("Explicit type conversions:");
      genericNumber3 = parseInt(genericNumber3);
      genericNumber4 = parseInt(genericNumber4);
      console.log(genericNumber3 + genericNumber4);
      return "Console Log Section 05"
    }

    function dataTypes(){
      console.log("******Section 06******")
      const text = "Word";
      const int_number = 36;
      const fl_boolean = false;
      const nl_result = null;
      let und_result;
      
      console.log("The basic data types in Javascript are: ");
      console.log(typeof text);
      console.log(typeof int_number);
      console.log(typeof fl_boolean);
      console.log(typeof nl_result);
      console.log(typeof und_result);
      
      console.log("Keep in mind that 'nl_result' should return NULL, it returns OBJECT because of a bug.");
      console.log("There's also the Symbol type on ES6.");
      return "Console Log Section 06"
    }
    
  return (
    <>
      <h2>Javascript Basic Variables, Statements and Commands: </h2>
      <p>1- To use Javascript to write a sentence directly in the web page, use the 
        command "document.write()":</p>
      <h4>{docWriteEx()}</h4>
      <h4>Technically, the code can be written inside the JSX return using curly braces, 
        but it would override the entire page.
      </h4>
      <br></br>

      <p>2- The alert pop up can be invoked by using the command "alert()" :</p>
      <h4>Example: </h4>
      <button type="button" className="btn" onClick={invokeAlertEvent}>Summon Alert</button>
      <br></br>
      <br></br>

      <p>3- Variables are the most basic building block: </p>
      <h4>Code: </h4>

      <img src={J02_Code01} alt='Variables'></img>
      <label>Displaying basic Javascript variables in the console.</label>
      <h4>Result: {basicVariableExample()}</h4>
      <br></br>

      <p>4- Variable declarations: </p>
      <h4>Code: </h4>
      <img src={J02_Code02} alt='Declarations'></img>
      <label>Declaring variables using 'var', 'let' and 'const'.</label>
      <h4>Result: {variableDeclare()}</h4>
      <br></br>

      <p>5- Special Characters Overlapping: </p>
      <h4>Code: </h4>
      <img src={J02_Code03} alt='Overlapping'></img>
      <label>Overlapping the special character using the backslash.</label>
      <h4>Result: Console Log Section 03</h4>
      {console.log("******Section 03******")}
      {console.log('Overwrite the apostrophe using back slash on: I\'m am')}
      <br></br>

      <p>6- Basic Numerical Operations: </p>
      <h4>Code: </h4>
      <img src={J02_Code04} alt='Numerical Operations'></img>
      <label>Example using the four basic operators and the modulus.</label>
      <h4>Result: {numericalOperations()}</h4>
      <br></br>

      <p>7- Strings and Type Conversions: </p>
      <h4>Code: </h4>
      <img src={J02_Code05} alt='Type Conversions'></img>
      <h4>Result: {typeConversions()}</h4>
      <br></br>

      <p>8- Data Types: </p>
      <h4>Code: </h4>
      <img src={J02_Code06} alt='Data Types'></img>
      <h4>Result: {dataTypes()}</h4>
      <br></br>
    </>
  )
}

export default J02_Basics