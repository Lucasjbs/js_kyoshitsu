import React from 'react'

function J05_References() {

    function references(){
      console.log("******Section 01******")

      let ref_obj1 = {
          name: "Ryuka"
      }
      let ref_obj2 = ref_obj1;
      
      ref_obj2.name = "Tanaki";
      
      console.log(ref_obj1.name);
      console.log(ref_obj2.name);
      //Object is a reference datatype
      ref_obj1.name = "Ryuka";
      ref_obj2 = {...ref_obj1};
      ref_obj2.name = "Tanaki";
      
      console.log(ref_obj1.name);
      console.log(ref_obj2.name);
  
        return "Console Log Section 01"
      }

      function nullUndef(){
        console.log("******Section 02******")

        let nl_number1 = 20 + null;
        let nl_number2 = 20 + undefined;
        
        console.log("Null is set by the programmer");
        console.log("Undefined is set by JavaScript");
        console.log(nl_number1);
        console.log(nl_number2);

        return "Console Log Section 02"
      }

      function truthyFalsy(){
        console.log("******Section 03******")

        //Falsy values: "", '', ``, 0, -0, NaN, false, null, undefined
        //Everything else is Truthy

        const tf_string1 = "John";
        const tf_string2 = "";

        if(tf_string1) console.log("The value is Truthy");
        else console.log("The value is Falsy");

        if(tf_string2) console.log("The value is Truthy");
        else console.log("The value is Falsy");

        return "Console Log Section 03"
      }

      function ternaryOpr(){
        console.log("******Section 04******")

        const tf_string1 = "John";
        const tf_string2 = "";
        let opr_string1 = "Typeof is a unary operator";
        console.log(typeof opr_string1);
        
        opr_string1 = opr_string1 + " and assignment is a binary operator."
        console.log(opr_string1);
        
        //Ternary operator is an IF ELSE statement with the syntax:
        //condition ? (run if true) : (run if false)
        //Using the previous example:
        
        tf_string1 ? (console.log("The previous example value is Truthy")) : (console.log("The previous example value is Falsy"));
        tf_string2 ? (console.log("The previous example value is Truthy")) : (console.log("The previous example value is Falsy"));

        return "Console Log Section 04"
      }

  return (
    <div className='container'>
        <div className='row'>
            <h2>References, Null, Truthy and Ternary Operator: </h2>
            <div className='col-sm-10'>
                <p>1- References in Javascript: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j05_Code01.png' alt='References'></img>
                <h6>Result: </h6>
                <strong>{references()}</strong>
                <br></br>
                <br></br>

                <p>2- Value of Null and Undefined: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j05_Code02.png' alt='Null Undefined'></img>
                <h6>Result: </h6>
                <strong>{nullUndef()}</strong>
                <br></br>
                <br></br>

                <p>3- Truthy and Falsy: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j05_Code03.png' alt='Truthy Falsy'></img>
                <h6>Result: </h6>
                <strong>{truthyFalsy()}</strong>
                <br></br>
                <br></br>

                <p>4- Ternary Operator: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j05_Code04.png' alt='Ternary'></img>
                <h6>Result: </h6>
                <strong>{ternaryOpr()}</strong>
                <br></br>
                <br></br>

                <a href='http://localhost:3000/'>Return to home page</a>
            </div>
        </div>
    </div>
  )
}

export default J05_References